import { ListGroup } from "react-bootstrap";
import { CartState } from "../context/Context";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart]);


  return (
    <div className="home">
      <div className="productContainers">
        {cart.length > 0 ? (
          <>
            <ListGroup>
              {
                cart.map((prod) => (
                  <ListGroup.Item key={prod.id}>
                    <Row>
                      <Col md={2}>
                        <Image src={prod.image} alt={prod.name} fluid rounded />
                      </Col>
                      <Col md={2}>
                        <span>{prod.name}</span>
                      </Col>
                      <Col md={2}>₹ {prod.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={prod.qty}
                          onChange={(e) =>
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                id: prod.id,
                                qty: e.target.value,
                              },
                            })
                          }
                        >
                          <option key={1}>1</option>
                          <option key={2}>2</option>
                          <option key={3}>3</option>
                          <option key={4}>4</option>
                          <option key={5}>5</option>
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                          <Button
                            type="button"
                            variant="light"
                            className="button"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                          >
                            <AiFillDelete fontSize="20px" className="icon"/>
                          </Button>                        
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </>
        ) : (<> <h3> Cart is Empty </h3> </>)}
      </div>
      <div>

      </div>
      <div className="filters summary">
        <span className="title"> Subtotal items : {cart.length} </span>
        <span> {total > 0 ? (<> Delivery charges : ₹ 20 </>) : (<> Delivery charges : ₹ 0</>)}</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          {total > 0 ? (<> Total: ₹ {total + 20}</>) : (<> Total: ₹ {total}</>)}
        </span>

        <Form>
          {['radio'].map((type) => (
            <div key={`Pay Method`} className="mb-3">
              <Form.Check
                custom
                type={type}
                id={`Cash on Delivery`}
                label={`Cash on Delivery`}
              />

              <Form.Check
                custom
                disabled
                type={type}
                label={`Google Pay`}
                id={`Google Pay`}
              /> (soon will be avilable)
            </div>
          ))}
        </Form>

        <Link to="/userForm">
          <Button
            id="button"
            type="button"
            disabled={cart.length === 0} >
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart
