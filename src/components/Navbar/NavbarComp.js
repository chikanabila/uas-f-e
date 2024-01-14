import React, {useState, useEffect} from 'react';
import { Navbar, Nav, Container, Form} from 'react-bootstrap';

const NavbarComp = () => {
  const[changeColor, setChangeColor] = useState(false);
  
  const changeBackgroundColor = () => {
    if (window.scrollY > 400) {
      setChangeColor(true);
    } else{
      setChangeColor(false);
    }
  };

  useEffect(() =>{
    changeBackgroundColor();
    window.addEventListener("scroll",changeBackgroundColor);
  })

  return (
    <div className="fixed-top">
     <Navbar expand="lg" variant="dark" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fw-bold fs-4'>Abing's</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="#gallery" className='mx-2'>Gallery</Nav.Link>
            <Nav.Link href="#services" className='mx-2'>Service</Nav.Link>
            <Nav.Link href="#faq" className='mx-2'>FAQ</Nav.Link>
            <Nav.Link href="#login" className='mx-2'>Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
 
export default NavbarComp
