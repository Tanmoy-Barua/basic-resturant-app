import React, {useState} from 'react'
// import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
// import DishDetails from './DishdDetails'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        dishes: state.dishes 
    }
}

const Menu = (props) => {
    console.log(props);
    document.title = "Menu | Resturant";
    // setDishes()
    const [selectedDish, setSelectedDish] = useState(null);

    const OnDishDetails = dish => {
        setSelectedDish(dish)
    }

    // let dishDetails = null;
    if(selectedDish!==null){
        // dishDetails = <DishDetails dish={selectedDish}/>
    }
  return (
    <>
        <div className="container">
            <div className="row">
                {props.dishes && props.dishes.map((item)=><MenuItem key={item.id} dish={item} OnDishDetails={OnDishDetails} />)}
            </div>
        </div>
    </> 
  )
}

export default  connect(mapStateToProps)(Menu)