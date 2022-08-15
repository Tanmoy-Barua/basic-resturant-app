import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'


const MenuItem = (props) => {
 
  return (
    <>
      <div className="col-md-3">
        <Card>
            <CardBody>
                <CardImg alt={props.dish.name} src={props.dish.image}/> 
                <CardImgOverlay>
                    <Link to={'/menu-details/'+props.dish.name} state={{item : props.dish}}><CardTitle onClick={()=>props.OnDishDetails(props.dish)}>{props.dish.name}</CardTitle></Link>
                </CardImgOverlay>
            </CardBody>
        </Card>
      </div>
    </>
  )
}

export default MenuItem