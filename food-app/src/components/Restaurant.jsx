import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Restaurant = (props) => {
  const dispatch = useDispatch();

  const { restaurants, loading } = props;

  const history = useHistory();

  function addToFavor(restaurant) {
    Swal.fire({
      icon: "success",
      title: `Success add "${restaurant.name}" to favorite`,
      timer: 3000,
      showConfirmButton: false,
    });
    dispatch({
      type: "ADD_TO_FAVOR",
      payload: { restaurant },
    });
  }
  function toDetail(id) {
    history.push(`/detail/${id}`);
  }

  if (loading) return <h1 className="text-center mt-5">Loading....</h1>;
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
                <Card.Title><b>ID:</b> {el.restaurant.id}</Card.Title>
                <Card.Title>{el.restaurant.name}</Card.Title>
                <Card.Text>Review: {el.restaurant.all_reviews_count}</Card.Text>
                <Button
                  className="mr-3"
                  variant="primary"
                  onClick={() => addToFavor(el.restaurant)}
                >
                  Add to Favorite
                </Button>
                <Button
                  variant="success"
                  onClick={() => toDetail(el.restaurant.id)}
                >
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

export default Restaurant;
