import { useState } from "react";
import styles from "./css/Header.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} bg-primary w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to = {"/"}>
            <div className="p-3">
              <img
                src="https://itschool.ro/images/logo-itschool-dark.svg"
                alt="itschool logo"
              />
          </div>
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link to = {"/category/technology"}>
                  <div
                    className="p-3 text-uppercase text-light"
                  >
                    Tech
                  </div>
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to = {"/category/football"}>
                  <div
                    className="p-3 text-uppercase text-light"
                  >
                    Fotbal
                  </div>
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to = {"/category/fashion"}>
                  <div
                    className="p-3 text-uppercase text-light"
                  >
                    Fashion
                  </div>
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to = {"/favorites"}>
                  <div
                    className="p-3 text-uppercase text-light"
                  >
                    Favorite
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
