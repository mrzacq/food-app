import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { useHistory } from 'react-router-dom'

const CollectionList = (props) => {
  const { collections, addToFavor } = props;

  const history = useHistory()

  function toDetail(id) {
    history.push(`/detail/${id}`)
  }

  return (
    <Container>
      <h2 className="text-center mt-3 mb-3">List Collection</h2>
      <Row className="mt-3 mb-3">
        {collections.map((el) => {
          return (
            <Card
              key={el.collection.collection_id}
              style={{ width: "18rem" }}
              className="mx-auto my-2"
            >
              <Card.Img variant="top" src={el.collection.image_url} />
              <Card.Body>
                <Card.Title>{el.collection.title}</Card.Title>
                <Button
                  className="mr-3"
                  variant="primary"
                  onClick={(event) =>
                    addToFavor(
                      event,
                      el.collection.collection_id,
                      el.collection.title
                    )
                  }
                >
                  Add to Favorite
                </Button>
                <Button
                  variant="success"
                  onClick={() => toDetail(el.collection.collection_id)}>
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
