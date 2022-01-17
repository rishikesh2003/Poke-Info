import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/PokemonDetail.module.css";
import { colors } from "../components/colors";
import tinycolor from "tinycolor2";
import { prominent } from "color.js";

function PokemonDetail({ match }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [vibrantColor, setVibrantColor] = useState("#FFFFFF");
  const pokemonNumber = Number(match.params.number);
  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      const d = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
      );
      await setData(d.data);
      const promColor = await prominent(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonNumber}.png`,
        {
          amount: 3,
          group: 30,
          format: "hex",
        }
      );

      let bgColor = tinycolor(promColor[1]).isLight()
        ? promColor[2]
        : promColor[1];

      document.body.style.backgroundColor = bgColor;
      console.log(bgColor);
    }
    fetchData();
    setLoading(false);
  }, [pokemonNumber]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className={styles["main-card"]}>
      <div className={styles.text}>
        <h3>ID: #{pokemonNumber}</h3>
        <h1>
          {data.forms
            ? data.forms[0].name.toUpperCase().split("-").join(" ")
            : ""}
        </h1>
        <div className={styles.types}>
          {data.types?.map((type) => (
            <img
              style={{
                backgroundColor: `${colors[`${type.type.name}`]}`,
                filter: `drop-shadow(2px 2px 5px ${
                  colors[`${type.type.name}`]
                })`,
              }}
              src={require(`../images/types/${type.type.name}.svg`)}
              alt="type"
            />
          ))}
        </div>
        <div className={styles.details}>
          <div>
            <h4>Height</h4>
            <p>{Number(data?.height) / 10}m</p>
          </div>
          <div>
            <h4>Weight</h4>
            <p>{Number(data?.weight) / 10}kg</p>
          </div>
          <div>
            <h4>Abilities</h4>
            {data.abilities?.map((ability) => (
              <p>
                {ability.ability.name[0].toUpperCase() +
                  ability.ability.name.split("-").join(" ").substring(1)}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`}
          alt="pokemon"
        />
      </div>
    </div>
  );
}

export default PokemonDetail;
