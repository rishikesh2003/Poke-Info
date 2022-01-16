import { useContext } from "react";
import styles from "../css/Search.module.css";
import { Search } from "./context/api/search";

function SearchBar() {
  const { search, setSearch } = useContext(Search);

  return (
    <div className={styles.container}>
      <div className={styles["input-holder"]}>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type={"text"}
          placeholder="Search"
        />
        <img
          src="https://img.icons8.com/ios-glyphs/20/000000/search--v1.png"
          alt="search-icon"
        />
      </div>
    </div>
  );
}

export default SearchBar;
