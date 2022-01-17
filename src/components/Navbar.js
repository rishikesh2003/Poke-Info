import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar() {
  const history = useHistory();
  return (
    <div className={styles.navbar}>
      <div
        onClick={() => {
          history.push("/");
        }}
        className={styles.logo}
      >
        <img
          src="https://img.icons8.com/fluency/35/000000/pokeball.png"
          alt="logo
        "
        />
        <h1>Poké Info</h1>
      </div>
      <Link className={"primary-btn"} to={"/favourites"}>
        <img
          src="https://img.icons8.com/ios-glyphs/15/ffffff/like--v1.png"
          alt="heart"
        />{" "}
        Favourites
      </Link>
    </div>
  );
}

export default Navbar;
