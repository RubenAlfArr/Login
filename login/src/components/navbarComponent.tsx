import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style.css'

function NavbarComponent() {
  return (
    <>
    <Navbar bg="light" variant="light"  >
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/centrosItv">CentrosItv</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <br />
  </>
  )
}

export default NavbarComponent