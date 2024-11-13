export type Definition = {
    meanings: Meaning[];
    phonetic?: string;
    phonetics: Phonetic[];
}

export type Meaning = {
    antonyms: string[];
    definitions: {definition: string}[];
    partOfSpeech: string;
    synonyms: string[];
}

export type Phonetic = {
    text: string;
    audio: string;
}