import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

export default class ListCategories extends Component {
  render() {
    const { collections, addToFavor } = this.props;
    return (
      <Col>
        <h2 className="text-center mt-3 mb-3">List Collection</h2>
        {collections.map((el) => {
          return (
            <div key={el.collection.collection_id}>
              <Card style={{ width: "25rem" }} className="mx-auto my-2">
                <Card.Img variant="top" src={el.collection.image_url} />
                <Card.Body>
                  <Card.Title>{el.collection.title}</Card.Title>
                  <Card.Text>{el.collection.description}</Card.Text>
                  <Button variant="primary" onClick={(event) => addToFavor(event, el.collection.collection_id)}>Add to Favorite</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Col>
    );
  }
}
