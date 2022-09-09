import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className='UserForm'>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Control type="text" placeholder="Enter Username"/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMobile Number">
            <Form.Control type="string" placeholder="Enter Mobile Number" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress">
          <Form.Control placeholder="Enter Address" />
        </Form.Group>

        <Form.Group controlId="formGridEnter Street">
          <Form.Control placeholder="Enter Street" />
        </Form.Group>

        <Form.Group controlId="formGridPostal Code">
          <Form.Control placeholder="Enter Postal Code" />
        </Form.Group>

        <Form.Group controlId="formGridNearBy Landmark">
          <Form.Control placeholder="Enter NearBy Landmark" />
        </Form.Group>

        <div id='Cancel'>
          <Link to="/cart" >
            Cancel
          </Link>


          <Button id='Button' variant="primary" type="submit" onClick={() => window.location.reload()}>
            <Link to="/">
              Confirm
            </Link>
          </Button>

        </div>
      </Form>
    </div>
  )
}

export default UserForm
