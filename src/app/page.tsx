"use client";

import { useState } from "react";
import Definition from "./components/definition";
import Footer from "./components/footer";
import Header from "./components/header"
import SearchBox from "./components/search-box"
import Word from "./components/word"

export default function Home() {

  const [word, setWord] = useState('');

  const updateWord = (word: string) => {
    setWord(word);
  }

  const [definitions, setDefinitions] = useState();

  const updateDefinitions = (definitions: any) => {
    setDefinitions(definitions);
  }

  return (
    <main className="flex justify-center align-center">
      <div className="flex flex-col mx-10 max-w-screen-lg min-w-[calc(100%-5rem)]">
        <Header />
        <SearchBox updateWord={updateWord} updateDefinitions={updateDefinitions} />
        {word !== '' && 
          <>
            {Array.isArray(definitions) && <Word word={word} definitions={definitions} />}
            <Definition definitions={definitions} />
            {Array.isArray(definitions) && <Footer word={word} />}
          </>
        }
      </div>
    </main>
  );
}
