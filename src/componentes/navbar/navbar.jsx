import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
    const Styles = {
        color: 'red',
        fontWeight: '600',
    }
    return (<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">Tienda Apicola</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Informacion</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Colmenas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Miel</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <CartWidgetComponent/>
        </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default NavBarComponent