import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <Navbar className={styles.navbar}>
      <Nav className={styles.links}>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/videos">
          Videos
        </Nav.Link>
        <Nav.Link>Shows</Nav.Link>
        <Nav.Link>About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
