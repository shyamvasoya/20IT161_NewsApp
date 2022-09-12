import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button href="/newsdetail/" variant="primary" className="btn btn-sm btn-primary">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}