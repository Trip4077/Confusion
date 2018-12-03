import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import './DishDetail.css';

class DishDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      dish: props.dish,
    }
  }

  renderDish(dish) {
    if(this.state.dish) {
      return(
          <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" src={this.state.dish.image} alt={this.state.dish.name} />
            <CardBody>
              <CardTitle>{this.state.dish.name}</CardTitle>
              <CardText>{this.state.dish.description}</CardText>
            </CardBody>
          </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderComment() {
    const comments = this.state.dish.comments.map(text => {
      return(
        <div key={text.id}>
          <p>{text.comment}</p>
          <p>{text.author} {text.date}</p>
        </div>
      );
    });

    return(
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comments}
      </div>
    );
  }

  render() {
    return(
      <div className="row active">
        {this.renderDish(this.state.dish)}
        {this.renderComment()}
      </div>
    );
  }
}

export default DishDetail
