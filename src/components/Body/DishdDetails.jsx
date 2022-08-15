import React from 'react';
import LoadComments from './LoadComments'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Header from '../Header/Header'
import {useLocation} from "react-router-dom";
const DishdDetails = (props) => {

  const dishItem= useLocation().state;
  console.log(dishItem.item.image);
  // const comments = props.dish.comments;
  // console.log(comments);

  // comments.map((comment) => console.log(comment));

  // comments.map(comment => console.log(comment.author))
    
  return (

    <div>
      <Header />
        <Card style={{width:"50%", margin: "10px auto"}}>
            <CardImg top src={"../"+dishItem.item.image} alt={dishItem.item.name} className="animate__animated animate__fadeInDown img-fluid"/>
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{dishItem.item.name}</CardTitle>
                <CardText>{dishItem.item.description}
                </CardText>
                <CardText>BDT {dishItem.item.price}</CardText>
                <hr />
                <LoadComments comments={dishItem.item.comments} />
                {/* {console.log(Loadcomments)} */}
            </CardBody>
        </Card>
    </div>
  )
}

export default DishdDetails