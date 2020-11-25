import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom'

const CollectionList = (props) => {
  const { restaurants, addToFavor } = props;

  const history = useHistory()

  function toDetail(id) {
    history.push(`/detail/${id}`)
  }

  return (
    <Container>
      <h2 className="text-center mt-3 mb-3">List Restaurant</h2>
      <Row className="mt-3 mb-3">
        {restaurants.map((el) => {
          return (
            <Card
              key={el.restaurant.id}
              style={{ width: "18rem" }}
              className="mx-auto my-2"
            >
              <Card.Img variant="top" src={el.restaurant.featured_image} />
              <Card.Body>
                <Card.Title>{el.restaurant.name}</Card.Title>
                <Card.Text>Review: {el.restaurant.all_reviews_count}</Card.Text>
                <Button
                  className="mr-3"
                  variant="primary"
                  onClick={(event) =>
                    addToFavor(
                      event,
                      el.restaurant.id,
                      el.restaurant.name
                    )
                  }
                >
                  Add to Favorite
                </Button>
                <Button
                  variant="success"
                  onClick={() => toDetail(el.restaurant.id)}>
                  Detail
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default CollectionList;
