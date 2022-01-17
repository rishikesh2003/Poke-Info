import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Search } from "./context/api/search";
import PokemonCard from "./PokemonCard";

function PokemonCardHolder() {
  const { search } = useContext(Search);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonPerPage = 150;

  const filteredData = data.filter((pokemon) =>
    pokemon.name
      .split("-")
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemons = filteredData.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(filteredData.length / pokemonPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  if (pageNumbers.length !== 0) {
    if (!pageNumbers.includes(currentPage)) {
      setCurrentPage(1);
    }
  }
  const Pagination = () => {
    return (
      <div className={"footer"}>
        {pageNumbers.map((num, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentPage(num);
            }}
            className={"number"}
          >
            {num}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const d = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=3000"
      );
      await setData(d.data.results);
      setLoading(false);
    }
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Pagination />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {currentPokemons.map((data, index) => (
          <PokemonCard key={index} name={data.name} url={data.url} />
        ))}
      </div>
      <Pagination />
    </>
  );
}

export default PokemonCardHolder;
