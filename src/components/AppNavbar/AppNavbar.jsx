import { Container, Nav, Navbar } from 'react-bootstrap';
import './AppNavbar.css';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container id="AppNavbar-nav-container">
				<Navbar.Brand href="/">App SPA</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/player">
							Player
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
