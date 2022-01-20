import { Container, Nav, Navbar } from 'react-bootstrap';
import './AppNavbar.css';

export default function AppNavbar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container id="AppNavbar-nav-container">
				<Navbar.Brand href="#home">App SPA</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Accueil</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
