import styles from "../css/PokemonCard.module.css";
import notAvailableImg from "../images/img-not-available.jpg";
import { Link } from "react-router-dom";

function PokemonCard({ name, url }) {
  return (
    <div className={styles.card}>
      <img
        className={styles["pokemon-img"]}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = notAvailableImg;
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          url.split("/")[6]
        }.png`}
        alt="pokemon-img"
      />
      <div className={styles["text-div"]}>
        <p>{name.split("-").join(" ")}</p>
        <img
          style={{ cursor: "pointer" }}
          src="https://img.icons8.com/ios-glyphs/30/fa314a/like--v1.png"
          alt="fav-icon"
        />
      </div>
      <Link className={styles.link} to={`/pokemon/${url.split("/")[6]}`}>
        More Info
      </Link>
    </div>
  );
}

export default PokemonCard;
