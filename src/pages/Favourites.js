import { useContext } from "react";
import { Favourites } from "../components/context/api/favourites";
import PokemonCard from "../components/PokemonCard";

function FavouritesPage() {
  document.body.style.background = "white";
  const { favourites } = useContext(Favourites);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {favourites.map((data, index) => (
          <div key={index} style={{ marginTop: "100px" }}>
            <PokemonCard
              name={data.name}
              url={data.url}
              fromFavourites={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouritesPage;
