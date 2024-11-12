"use client";

import { useState } from "react";
import Definition from "./components/definition";
import Footer from "./components/footer";
import Header from "./components/header"
import SearchBox from "./components/search-box"
import Word from "./components/word"

export default function Home() {

  const [word, setWord] = useState('');

  const updateWord = (w: string) => {
    setWord(w);
  }

  const [definitions, setDefinitions] = useState();

  const updateDefinitions = (definitions: any) => {
    setDefinitions(definitions);
  }

  return (
    <main className="flex justify-center align-center">
      <div className="flex flex-col mx-10 max-w-screen-lg">
        <Header />
        <SearchBox updateWord={updateWord} updateDefinitions={updateDefinitions} />
        <Word word={word} />
        <Definition definitions={definitions} />
        <Footer word={'hello'} />
      </div>
    </main>
  );
}
