import React from 'react'
import LoadComments from './LoadComments'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'
const DishdDetails = (props) => {
    console.log(props.dish.comments);

    const Loadcomments = props.dish.comments.map(item => {
      return item
    }) 
    
  return (
    <div>
        <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name}/>
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}
                <p>BDT {props.dish.price}</p>
                </CardText>
                {/* <p>BDT {props.dish.comments}</p> */}
                <hr />
                {/* <LoadComments comments={props.dish.comments} /> */}
                {console.log(Loadcomments)}
            </CardBody>
        </Card>
    </div>
  )
}

export default DishdDetails