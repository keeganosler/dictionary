"use client";

const fetchApi = async (word: string) => {
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
} 

const searchWord = async (word: string) => {
    const response = await fetchApi(word);
    return await response.json();
}

export default function SearchBox({updateWord, updateDefinitions}: any) {

    const handleInput = (input: string) => {
        updateWord(input);
        const definitionsResult = searchWord(input);
        updateDefinitions(definitionsResult);
    }

    return (
        <div>
            <input name="search-box"  onChange={(e) => handleInput(e.target.value)} />         
        </div>
    )
}