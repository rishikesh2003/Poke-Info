import styles from "../css/PokemonCard.module.css";

function PokemonCard({ name, url }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          url.split("/")[6]
        }.png`}
        alt="pokemon-img"
      />
      <p>{name.split("-").join(" ")}</p>
    </div>
  );
}

export default PokemonCard;
