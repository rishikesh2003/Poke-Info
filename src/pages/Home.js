import PokemonCardHolder from "../components/PokemonCardHolder";
import SearchBar from "../components/SearchBar";

function Home() {
  document.body.style.background = "white";
  return (
    <div>
      <SearchBar />
      <PokemonCardHolder />
    </div>
  );
}

export default Home;
