import React from "react";
import { Grid } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Grid fluid>
        <nav className="pull-left">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link2</a>
            </li>
            <li>
              <a href="#">Link3</a>
            </li>
            <li>
              <a href="#">Link4</a>
            </li>
          </ul>
        </nav>
      </Grid>
    </footer>
  );
}

export default Footer;
