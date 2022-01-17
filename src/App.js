import { Route, Switch } from "react-router-dom";
import SearchContext from "./components/context/components/SearchContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <SearchContext>
          <Route exact path={"/"} component={Home} />
          <Route path={"/pokemon/:number"} component={PokemonDetail} />
        </SearchContext>
      </Switch>
    </>
  );
}

export default App;
