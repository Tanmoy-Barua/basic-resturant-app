import React, {useState} from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishdDetails'

const Menu = () => {
    const dishes = DISHES;
    // setDishes()
    const [selectedDish, setSelectedDish] = useState(null);

    const OnDishDetails = dish => {
        setSelectedDish(dish)
    }

    let dishDetails = null;
    if(selectedDish!==null){
        dishDetails = <DishDetails dish={selectedDish}/>
    }
  return (
    <>
        <div className="container">
            <div className="row">
                {dishes && dishes.map((item)=><MenuItem key={item.id} dish={item} OnDishDetails={OnDishDetails} />)}
            </div>
        </div>
    </> 
  )
}

export default Menu