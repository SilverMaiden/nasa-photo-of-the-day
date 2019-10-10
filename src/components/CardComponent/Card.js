import React, {useState} from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse
} from 'reactstrap';


const MyCard = (props) => {
    const [myCollapse, setMyCollapse] = useState({collapse: true})
    const [buttonText, setButtonText] = useState("Read More");

  return (
    <div className="my-card">
      <Card style={{width:400}}>
          <CardImg top width="318px" height="180px" src={props.hdurl} alt="Card image cap" />

        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>

          <Collapse isOpen={!myCollapse}>
              <CardText style={{marginBottom:10}}>{props.exp}</CardText>
          </Collapse>
        <Button onClick={() => {
            if (myCollapse) {
                setButtonText("Close")
            } else {
                setButtonText("Read More")
            }
            setMyCollapse(!myCollapse);
          }}>{buttonText}</Button>

        </CardBody>
      </Card>

    </div>
  );
};

export default MyCard;
