import { Route, Switch } from "react-router-dom";
import SearchContext from "./components/context/components/SearchContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import FavouritesPage from "./pages/Favourites";
import FavouritesContext from "./components/context/components/FavouritesContext";

function App() {
  return (
    <>
      <FavouritesContext>
        <Navbar />
        <Switch>
          <SearchContext>
            <Route exact path={"/"} component={Home} />
            <Route path={"/pokemon/:number"} component={PokemonDetail} />
            <Route path={"/favourites"} component={FavouritesPage} />
          </SearchContext>
        </Switch>
      </FavouritesContext>
    </>
  );
}

export default App;
