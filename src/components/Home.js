import { CartState } from "../context/Context";
import SingleProducts from "./SingleProducts";

import "./styless.css";

const Home = () => {

  const { state: { products } } = CartState();

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  )
}

export default Home
