import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id='container_nav'>
        <ul id='nav_ul'>
          <li className='LinkNav'>
            <Link to={''}><img src="../src/assets/images/logo2.png" id='logo'/></Link>
          </li>
          <li className='LinkNav'>
            <Link to={''}>בית</Link>
          </li>
          <li className='LinkNav'>
            <Link to={'/meeting'}>הזמנה</Link>
          </li>
          <li className='LinkNav'>
            <Link to={'/gallery'}>גלריה</Link>
          </li>
         </ul>
      </nav>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Nav className="me-auto">
            <Nav><Link to={''}>home</Link></Nav>
            <Nav> <Link to={'/meeting'}>meeting</Link></Nav>
          </Nav>
        </Container>
      </Navbar> */}
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
