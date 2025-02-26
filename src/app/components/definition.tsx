import { type Definition } from "../models/Definition";
import { EmptyResult } from "../models/EmptyResult";

export default function Definition(props: {definitions: Definition[] | EmptyResult | undefined}) {
    return (
        Array.isArray(props.definitions) ?
        <div>
            {props.definitions?.[0].meanings.map(meaning => (
                <>
                    <div className="flex flex-row items-center gap-6">
                        <h1 className="text-2xl font-bold italic py-6">{meaning.partOfSpeech}</h1>
                        <hr className="w-full"></hr>
                    </div>
                    <h2 className="text-lg font-light">Meaning</h2>
                    <ul className="p-4 list-disc list-inside">
                        {meaning.definitions.slice(0,4).map(definition => (
                            <>
                                <li>{definition.definition}</li>
                            </>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-6">
                        <h2 className="text-lg font-light">Synonyms</h2>
                        <div className="flex flex-row gap-4">
                        {meaning.synonyms.slice(0,4).map(synonym => (
                            <>
                                <h2 className="text-lg font-bold text-fuchsia-600">{synonym}</h2>
                            </>
                        ))}
                        </div>
                    </div>
                </>
            ))}            
        </div>
        :
        <div>
            <h1 className="text-2xl font-bold italic py-6">{props.definitions?.title}</h1>
            <h2 className="text-lg font-light">{props.definitions?.message}</h2>
            <h2 className="text-lg font-light">{props.definitions?.resolution}</h2>
        </div>
    )
}