import React from 'react'
import GreekSalad from '../assets/greeksalad.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonDessert from '../assets/lemondessert.jpg'
import FoodCard from './FoodCard'

const FoodCards = () => {
  return (
    <div className='foodcards'>
        <FoodCard image={GreekSalad} itemname="Greek Salad" price="$8.99" description="Little Lemon's greek salad comes with the freshest greens, fresh sliced onions, the most delicate feta cheese, and decadent kalmata olives imported straight from Greece. Comes with choice of dressing, including our house made vinaigrette. Add chicken for +$3." />
        <FoodCard image={Bruchetta} itemname="Bruschetta" price="$6.49" description="Our bruschetta uses bread baked fresh in house daily that is toasted and topped with fresh mozerella also made and sliced in house, fresh roma tomato slices, and fresh basil leaves. Then drizzled with fine olive oil and house made vinaigrette, and a dash of fresh cracked salt and pepper." />
        <FoodCard image={LemonDessert} itemname="Limoncello Cake" price="$5.89" description="This elegant desert is inspired by the classic drink of the same name (minus the booze)! We layer our delicate lemon sponge between some of our elegant lemon compote, and top it off with some lemon icing and candied lemon peel. A truly balanced and delicious lemon cake that won't leave you puckering." />
    </div>
  )
}

export default FoodCards