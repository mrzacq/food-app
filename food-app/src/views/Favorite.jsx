import React from "react";
import { useSelector } from "react-redux";
import { Card, Container, Row } from "react-bootstrap";

function Favorite() {
  const favorites = useSelector((state) => state.favorReducer.favorites);
  return (
    <Container className="mt-4">
      <h2 className="text-center mt-3 mb-3">Favorite Restaurant</h2>
      <Row className="mt-3 mb-3">
        {favorites.map((el) => {
          return (
            <Card
              key={el.id}
              style={{ width: "20rem" }}
              className="mx-auto my-2"
            >
              <Card.Img variant="top" src={el.featured_image} alt={el.name}/>
              <Card.Body>
                <Card.Title>
                  <b>ID:</b> {el.id}
                </Card.Title>
                <Card.Title>
                  <h1>{el.name}</h1>
                </Card.Title>
                <Card.Text>
                  <b>Review:</b> {el.all_reviews_count}
                </Card.Text>
                <Card.Text>
                  <b>Address:</b> {el.location.address}
                </Card.Text>
                <Card.Text>
                  <b>HP:</b> {el.phone_numbers}
                </Card.Text>
                <Card.Text>
                  <b>Establishment:</b> {el.establishment}
                </Card.Text>
                <Card.Text>
                  <b>Cuisines:</b> {el.cuisines}
                </Card.Text>
                <Card.Text>
                  <b>Highlights:</b> {el.highlights.join(", ")}
                </Card.Text>
                <Card.Text>
                  <a href={el.url}>Website</a>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}

export default Favorite;
