import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            La Casita del Manga
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#mangas">mangas</Nav.Link>
            <Nav.Link href="#comics">comics</Nav.Link>
            <Nav.Link href="#figuras">figuras</Nav.Link>
            <Nav.Link href="#cosplay">cosplay</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;