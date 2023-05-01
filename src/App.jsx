import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import ItemOrderList from './components/ItemOrderList'
import ItemDescriptionList from './components/ItemDescriptionList'
import FindSequence from './components/FindSequence'

function App() {
  const [sequence, setSequence] = useState([])

  return (
    <>
      <Navbar variant='light' bg='light' collapseOnSelect expand="md" fixed='top'>
        <Container>
          <Navbar.Brand>
            Vital Bracelet BE Items Info
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav variant='pills' id='nav'>
              <Nav.Link href='#items'>Items</Nav.Link>
              <Nav.Link href='#grant-order'>Grant order</Nav.Link>
              <Nav.Link href='#find-sequence'>Sequence finder</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container as='main'>
        <ItemDescriptionList id='items'/>
        <ItemOrderList id='grant-order' sequence={sequence}/>
        <FindSequence id='find-sequence' sequence={sequence} setSequence={setSequence}/>
      </Container>
    </>
  )
}

export default App
