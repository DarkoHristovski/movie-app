import { Link } from 'react-router-dom';
import './header.css';
import tvLogo from '../../icon/tv.png';
import Home from '../Main/Home/Home';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
	return (
		<>
			<Navbar
				expand='md'
				className='bg-body-tertiary '
			>
				<Container>
					<Navbar.Brand>
						<Link
							to='/'
							className='logo'
							style={{ textDecoration: 'none', color: '#2a0a3e' }}
						>
							<img
								src={tvLogo}
								alt='logo'
								style={{ width: '50px' }}
							/>
							<p>MovieFriend</p>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-4 link'>
							<Link to='/'>Home</Link>
							<Link to='/movies'>Movies</Link>
							<Nav.Link href='/favorites'>Favorites</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
