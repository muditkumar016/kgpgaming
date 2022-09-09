import React from 'react'
import pic from "./Home food 1.jpeg"
import "./BodyStyle.css";

const Body = () => {
  return (
    <div>
      <img src={pic} className="HomeFoodImg" alt='food pic' height="100%" width="100%" />
      <div className='containers bar' height>
        <h2 id='HeadTag'>Delicious Food, Delivered to you</h2>
        <p id='BodyTag'>Choose your favorite food from our broad selection of available food and enjoy a delicious lunch or dinner at home.</p>
      </div>
    </div>
  )
}

export default Body
