import React from 'react'
import RestaurantFood from '../assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Here at Little Lemon, we take pride not only in our food quality, but also in the quality of our service. We listened to customers concerns regarding our reservation feature, and have acted accordingly in order to fix this. That's why for the rest of Jaunuary 2023, we are offering 10% off for customers who reserve a table online through our website (no third-party sites included in this offer). Thank you, and we look forward to seeing you all very soon!</p>
          <button><Link to="booking">Reserve a table</Link></button>
        </div>
        <img src={RestaurantFood}  alt="Little Lemon Restaurant Food" />
      </div>
    </section>
  )
}

export default Hero