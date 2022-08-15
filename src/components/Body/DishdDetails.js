import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
const DishdDetails = (props) => {
    const comments = props.dish.comments;
    
  return (
    <div>
        <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name}/>
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}
                <p>BDT {props.dish.price}</p>
                </CardText>
                {
                  comments.map(x=> <p>{x.comment}</p>)
                }
                <hr />
                {/* <LoadComments comments={props.dish.comments} /> */}
                {/* {console.log(Loadcomments)} */}
            </CardBody>
        </Card>
    </div>
  )
}

export default DishdDetails