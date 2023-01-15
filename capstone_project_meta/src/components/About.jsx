import React from 'react'
import RestaurantImage from '../assets/restaurant.jpg'
import ChefsImage from '../assets/chefs.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h2>About</h2>
          <p>Little lemon is a family owned and operated Mediterranean restaurant here in Chicago. Owned by brothers, chefs, and business partners Mario and Adrian, Little Lemon focuses on bringing customers classic Mediterranean dishes with the finest ingredients possible. All of this with an affordable price in mind of course!</p>
        </div>
        <div className="image-container">
          <img src={ChefsImage} alt="Little Lemon Restaurant" />
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs" />
        </div>
      </div>
    </section>
  )
}

export default About