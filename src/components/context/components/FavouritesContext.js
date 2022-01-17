import { useState } from "react";
import { Favourites } from "../api/favourites";

function FavouritesContext({ children }) {
  const pokemons = JSON.parse(localStorage.getItem("pokemons"));
  const [favourites, setFavourites] = useState(pokemons);
  return (
    <>
      <Favourites.Provider value={{ favourites, setFavourites }}>
        {children}
      </Favourites.Provider>
    </>
  );
}

export default FavouritesContext;
