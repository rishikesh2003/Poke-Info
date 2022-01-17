import styles from "../css/PokemonCard.module.css";
import notAvailableImg from "../images/img-not-available.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Favourites } from "./context/api/favourites";

function PokemonCard({ name, url, fromFavourites }) {
  const { favourites, setFavourites } = useContext(Favourites);

  function Delete(name) {
    const fData = favourites.filter((pokemon) => name !== pokemon.name);
    localStorage.setItem("pokemons", JSON.stringify(fData));
    setFavourites(fData);
  }
  function addToLocalStorage(obj) {
    let existing = false;
    const init = localStorage.getItem("pokemons");
    if (!init) {
      localStorage.setItem("pokemons", JSON.stringify([]));
    }
    const d = JSON.parse(localStorage.getItem("pokemons"));

    d.forEach((pokemon) => {
      if (pokemon.name === obj.name) {
        existing = true;
      }
    });
    if (!existing) {
      d.push(obj);
      setFavourites(d);
      localStorage.setItem("pokemons", JSON.stringify(d));
    } else {
      alert("The selected pokemon is aldready in your favourite list");
    }
  }
  return (
    <div className={styles.card}>
      <img
        className={styles["pokemon-img"]}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = notAvailableImg;
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          url.split("/")[6]
        }.png`}
        alt="pokemon-img"
      />
      <div className={styles["text-div"]}>
        <p>{name.split("-").join(" ")}</p>
        {!fromFavourites && (
          <img
            onClick={() => {
              addToLocalStorage({
                name: name.split("-").join(" "),
                url: `https://pokeapi.co/api/v2/pokemon/${url.split("/")[6]}`,
              });
            }}
            style={{ cursor: "pointer" }}
            src="https://img.icons8.com/ios-glyphs/30/fa314a/like--v1.png"
            alt="fav-icon"
          />
        )}
      </div>
      <div className={styles.btnsection}>
        <Link className={styles.link} to={`/pokemon/${url.split("/")[6]}`}>
          More Info
        </Link>
        {fromFavourites && (
          <img
            style={{ cursor: "pointer" }}
            src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"
            alt="delete"
            onClick={() => {
              Delete(name.split("-").join(" "));
            }}
          />
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
