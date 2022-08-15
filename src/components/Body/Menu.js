import React, {useState} from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishdDetails'

const Menu = () => {
    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState([]);

    const OnDishDetails = dish => {
        setSelectedDish(dish)
    }

    let dishDetails = null;
    if(selectedDish!=null){
        dishDetails = <DishDetails dish={selectedDish}/>
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                {dishes && dishes.map((item)=><MenuItem key={item.id} dish={item} OnDishDetails={OnDishDetails} />)}
                </div>
                <div className="col-6">
                    {dishDetails}
                </div>
            </div>
        </div>
    </> 
  )
}

export default Menu