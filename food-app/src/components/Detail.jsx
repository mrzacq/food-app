import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { collections } = props;
  const { collection_id } = useParams();
  const detail = [];
  for (let i = 0; i < collections.length; i++) {
    const obj = collections[i];
    if (obj.collection.collection_id === +collection_id) {
      detail.push(obj.collection);
    }
  }
  return (
    <Container className="mt-4">
      <Card style={{ width: "25rem" }} className="mx-auto my-2">
        <Row className="mt-3 mb-3">
          {detail.map((el) => {
            return (
              <Card
                key={el.collection_id}
                style={{ width: "20rem" }}
                className="mx-auto my-2"
              >
                <Card.Img variant="top" src={el.image_url} />
                <Card.Body>
                  <Card.Title>ID: {el.collection_id}</Card.Title>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                  <Card.Text><a href={el.url}>Website</a></Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Card>
    </Container>
  );
}

export default Detail;
