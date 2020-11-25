import React, {useState, useEffect} from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import API_URL from "../utils/constant"

function Detail(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    console.log("componentdetail")
    setLoading(true)
    fetch(API_URL + `search`, {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
        "content-type": "application/json",
      }
    })
    .then((response) => {
      if(response.status === 200) return response.json()
      else return Promise.reject()
    })
    .then((data) => {
      setDetail(data.restaurants)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [id])

  if (loading) return <h1>Loading....</h1>;

  const restaurant = []
  for(let i = 0; i < detail.length; i++){
    const obj = detail[i]
    if(obj.restaurant.id === id){
      restaurant.push(obj)
    }
  }
  console.log(restaurant, 'ini restorannya')

  return (
    <Container className="mt-4">
        <Row className="mt-3 mb-3">
          {restaurant.map((el) => {
            return (
              <Card
                key={el.restaurant.id}
                style={{ width: "30rem" }}
                className="mx-auto my-2"
              >
                <Card.Img variant="top" src={el.restaurant.featured_image} />
                <Card.Body>
                  <Card.Title><b>ID:</b> {el.restaurant.id}</Card.Title>
                  <Card.Title><h1>{el.restaurant.name}</h1></Card.Title>
                  <Card.Text><b>Review:</b> {el.restaurant.all_reviews_count}</Card.Text>
                  <Card.Text><b>Address:</b> {el.restaurant.location.address}</Card.Text>
                  <Card.Text><b>HP:</b> {el.restaurant.phone_numbers}</Card.Text>
                  <Card.Text><b>Establishment:</b> {el.restaurant.establishment}</Card.Text>
                  <Card.Text><b>Cuisines:</b> {el.restaurant.cuisines}</Card.Text>
                  <Card.Text><b>Highlights:</b> {el.restaurant.highlights.join(', ')}</Card.Text>
                  <Card.Text><a href={el.restaurant.url}>Website</a></Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
    </Container>
  );
}

export default Detail;
