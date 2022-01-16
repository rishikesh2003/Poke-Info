import { Route, Switch } from "react-router-dom";
import SearchContext from "./components/context/components/SearchContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <SearchContext>
          <Route exact path={"/"} component={Home} />
        </SearchContext>
      </Switch>
    </>
  );
}

export default App;
