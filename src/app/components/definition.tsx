import { type Definition } from "../models/Definition";

export default function Definition(props: {definitions: Definition[] | undefined}) {
    return (
        <div>
            {props.definitions?.[0].meanings.map(meaning => (
                <>
                    <h1 className="font-bold italic">{meaning.partOfSpeech}</h1>
                    <h1 className="font-light">Meaning</h1>
                    <ul className="p-4 list-disc list-inside">
                        {meaning.definitions.map(definition => (
                            <>
                                <li>{definition.definition}</li>
                            </>
                        ))}
                    </ul>
                </>
            ))}            
        </div>

    )
}