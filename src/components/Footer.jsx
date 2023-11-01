import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./css/Footer.module.css"

function Footer() {
  return (
    <footer className={`bg-dark`} >
      <Container>
        <p className="text-light text-center m-0 py-3">
          IT School România © 2021. Toate drepturile rezervate.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
