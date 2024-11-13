import { Definition } from "../models/Definition";

export default function Word(props: {word: string, definitions: Definition[] | undefined}) {

    const getPhonetic = ():(Definition | undefined) => {
        return props.definitions?.find((definition:Definition) => definition.phonetic);
    }

    const getPhoneticText = ():(string | undefined) => {
        return getPhonetic()?.phonetic;
    }

    const getPhoneticAudioUrl = ():(string |undefined) => {
        return getPhonetic()?.phonetics?.[0].audio;
    }

    const playAudio = () => {
        new Audio(getPhoneticAudioUrl()).play();
    }

    return (
        <div className="flex flex-row items-flex-start justify-between mt-10">
            <div className="flex flex-col">
                <h1 className="text-6xl">{props.word}</h1>
                <h1 className="mt-2 text-xl text-fuchsia-600">{getPhoneticText()}</h1>
            </div>
            <button className="rounded-full bg-fuchsia-200 p-4 w-20 h-20 flex justify-center items-center" onClick={playAudio}>
                <svg className="w-10 h-10 fill-fuchsia-700"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
            </button>
        </div>
    )
}