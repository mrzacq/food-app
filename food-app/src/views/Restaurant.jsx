import React, { useEffect } from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import fetchRestaurants from '../store/actions/fetchRestaurant'
import setFavor from '../store/actions/favor'

const Restaurant = (props) => {
  const restaurants = useSelector(state => state.restaurantReducer.restaurants)
  const loading = useSelector(state => state.restaurantReducer.loading)
  const error = useSelector(state => state.restaurantReducer.error)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  function addToFavor(restaurant) {
    Swal.fire({
      icon: "success",
      title: `Success add "${restaurant.name}" to favorite`,
      timer: 3000,
      showConfirmButton: false,
    });
    dispatch(setFavor(restaurant));
  }
  
  function toDetail(id) {
    history.push(`/detail/${id}`);
  }

  if (loading) return <h1 className="text-center mt-5">Loading....</h1>;
  if (error) return <h1 className="text-center mt-5">Error....</h1>;
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
              <Card.Img variant="top" src={el.restaurant.featured_image} alt={el.restaurant.name} />
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
