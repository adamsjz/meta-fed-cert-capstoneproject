import React from 'react'
import Testimonial from './Testimonial'
import Person1 from '../assets/person1.png'
import Person2 from '../assets/person2.png'
import Person3 from '../assets/person3.png'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div>
          <Testimonial image={Person1} name="Harisson Daniels" rating="5.0" testimonial="BETTER THAN GRANDMA" />
          <Testimonial image={Person2} name="Anna Weathers" rating="4.7" testimonial="Would give 5 stars but they need an all you can eat buffet. It's too good." />
          <Testimonial image={Person3} name="Victor Jackson" rating="4.9" testimonial="If I were on death row, I would want little lemon as my last meal. -.1 for not being open 24/7." />
        </div>
      </div>
    </section>
  )
}

export default Testimonials