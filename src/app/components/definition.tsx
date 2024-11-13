import { type Definition } from "../models/Definition";

export default function Definition(props: {definitions: Definition[] | undefined}) {
    return (
        <h1 className="font-bold">I am definition {JSON.stringify(props.definitions)}</h1>
    )
}