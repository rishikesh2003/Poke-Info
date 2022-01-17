import PokemonCardHolder from "../components/PokemonCardHolder";
import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet";
function Home() {
  document.body.style.background = "white";
  return (
    <>
      <Helmet>
        <title>Poké Info | Home</title>
      </Helmet>
      <div>
        <SearchBar />
        <PokemonCardHolder />
      </div>
    </>
  );
}

export default Home;
