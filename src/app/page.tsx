import Definition from "./components/definition";
import Footer from "./components/footer";
import Header from "./components/header"
import SearchBox from "./components/search-box"
import Word from "./components/word"

export default function Home() {
  const definitions = [1,2,3].map(k => <Definition />)
  return (
    <main className="flex justify-center align-center">
      <div className="flex-col">
        <Header />
        <SearchBox />
        <Word />
        {definitions}
        <Footer word={'hello'} />
      </div>
    </main>
  );
}
