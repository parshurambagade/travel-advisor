import React from 'react'
import "./header.scss"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = ({type, setType}) => {

  


    return (
      <div className="header-container">

      
      <Navbar expand="lg" className="bg-body-tertiary" style={{height:'100%',width:'100%', alignItems: 'center', padding:'0' }}>
        <Container fluid style={{height:'max-content',width:'100%' }}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{height:'max-content'}}>
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll 
              style={{height:'100%', display: 'flex', width:'100%', justifyContent:'space-evenly', alignItems:'center', padding:'1rem'}}
            >
              <Nav.Link className="nav-link" href="#action1">Enter dates</Nav.Link>
              
              {/* SEARCH BAR */}
              {/* <Autocomplete > */}
              <Form className="d-flex" style={{width:'50%', height:'max-content' }}>
                {/* <SearchIcon /> */}
              <Form.Control
                type="search"
                placeholder="Where to?"
                className="me-2"
                aria-label="Search"
                style={{ borderRadius:'2rem', padding:'1rem 3rem', fontSize:'1.2rem', boxShadow: 'rgba(0, 0, 0, 0.13) 0px 3px 3px, rgba(0, 0, 0, 0.20) 0px 3px 3px'}}
              />
            </Form>
            {/* </Autocomplete> */}
              
            <Nav.Link className="nav-link" href="#action1" style={{display:'flex', alignItems:'center', gap:'1rem', padding:'0', border:'none'}}><span style={{border:'1px solid black', padding:'.5rem 1.5rem', borderRadius:'2rem'}}>Filter</span>
              <NavDropdown id="navbarScrollingDropdown" title={type.title} value={type.value}  >
                <NavDropdown.Item onClick={() => {
                    setType({type: "attractions", title: "Attractions"});
                    console.log(type); 
                    }} 
                    value="attractions" >Attractions</NavDropdown.Item>

                <NavDropdown.Item onClick={() => {
                    setType({type: "hotels", title: "Hotels"});
                    console.log(type); 
                    }}
                    value="hotels">
                  Hotels
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => {
                    setType({type: "restaurants", title: "Restaurants"});
                    console.log(type); 
                }} value="restaurants">
                  Restaurants
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => {
                    setType({type: "shared", title: "Shared"});
                    console.log(type); 
                }} value="shared">
                  Shared
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => {
                    setType({type: "flights", title: "Flights"});
                    console.log(type); 
                }} value="flights">
                  Flights
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => {
                  setType({type: "attractionProducts", title: "Attraction Products"});
                }} value="attractionProducts">
                  Attraction Products
                </NavDropdown.Item>

                {/* <NavDropdown.Divider /> */}
               
              </NavDropdown>
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
}

export default Header;