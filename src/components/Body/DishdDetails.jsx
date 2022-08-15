import React from 'react';
import LoadComments from './LoadComments'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
const DishdDetails = (props) => {
  // const comments = props.dish.comments;
  // console.log(comments);

  // comments.map((comment) => console.log(comment));

  // comments.map(comment => console.log(comment.author))
    
  return (
    <div>
        <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name}/>
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}
                </CardText>
                <CardText>BDT {props.dish.price}</CardText>
                <hr />
                <LoadComments comments={props.dish.comments} />
                {/* {console.log(Loadcomments)} */}
            </CardBody>
        </Card>
    </div>
  )
}

export default DishdDetails