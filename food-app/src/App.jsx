import React from "react";
import Navigation from "./components/Navigation";
import CollectionList from "./components/CollectionList";
import Footer from "./components/Footer"
import useFetch from './helper/useFetch'
import { Container } from "react-bootstrap";
import API_URL from "./utils/constant";
import Swal from "sweetalert2";

export default function App(props) {
  const [collections, loading] = useFetch(
    API_URL + "collections?city_id=" + (Math.floor(Math.random() * 50) + 1),
    {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
        "content-type": "application/json",
      },
    }
  )

  if(loading) return <h1>Loading....</h1>

  const addToFavor = (event, id, title) => {
    event.preventDefault();
    Swal.fire({
      icon: "success",
      title: `Success add "${title}" to favorite`,
      timer: 3000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="App">
      <Navigation></Navigation>
      <div>
        <Container fluid>
            <CollectionList collections={collections} addToFavor={addToFavor} />
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
