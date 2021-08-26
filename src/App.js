import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Listing Form Generator</title>
      </Helmet>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Listing Form Generator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <form action="https://tinyurl.com/listing-form-demo-1">
        <div className="input">
          <input
            id="input"
            placeholder="Enter UPC code"
            type="text"
          />
        </div>
        <div className="select">
          <select id="select">
            <option>Select a retailer</option>
            <option>UNFI</option>
            <option>Amazon</option>
            <option>Walmart</option>
          </select>
        </div>
        <div>
          <Button id="button" type="submit">Generate listing form</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
