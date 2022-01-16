import { useState } from "react";
import { Search } from "../api/search";

function SearchContext({ children }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <Search.Provider value={{ search, setSearch }}>
        {children}
      </Search.Provider>
    </>
  );
}

export default SearchContext;
