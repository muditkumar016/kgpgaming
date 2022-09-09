import {
    Badge,
    Container,
    Dropdown,
    Nav,
    Navbar
} from "react-bootstrap";

import { AiFillDelete } from "react-icons/ai";
import { MdFastfood } from 'react-icons/md';
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { Button } from "react-bootstrap";
import './Header.css';

const Header = () => {

    const {
        state: { cart },
        dispatch
    } = CartState()

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 70 }}>
            <Container>
                <Navbar.Brand>
                    <Button variant="success" id="btn">
                        <Link to="/">Home</Link>
                    </Button>
                </Navbar.Brand>
                <Nav>
                    <Dropdown alignRight="true" >
                        <Dropdown.Toggle variant="success" id="btn"  >
                            <MdFastfood color="181D31" fontSize="25px" />
                            <Badge bg="E6DDC4" >{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 370 }} id="dropdown">

                            {cart.length > 0 ? (
                                <>
                                    {
                                        cart.map(prod => (
                                            <span className="cartitem" key={prod.id}>
                                                <img src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>₹ {prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (<span style={{ padding: 10 }}>Cart is Empty!</span>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header