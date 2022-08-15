import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

const MenuItem = (props) => {
 
  return (
    <div>
        <Card>
            <CardBody>
                <CardImg width="100%" alt={props.dish.name} src={props.dish.image}/> 
                <CardImgOverlay>
                    <CardTitle onClick={()=>props.OnDishDetails(props.dish)}>{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </CardBody>
        </Card>
    </div>
  )
}

export default MenuItem