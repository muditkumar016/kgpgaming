import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BottomStyle.css";

const Bottom = () => {
    return (
        <div id="Space">
            <Link to="/cart">
                <Button id='BottomBar' style={{ width: "98.5%" }}>
                    My Cart
                </Button>
            </Link>   
        </div>
    )
}

export default Bottom
