import React, { useState, useEffect } from "react";
import NavbarComponent from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import { Container, Row } from "react-bootstrap";
import API_URL from "./utils/constant";
import Swal from "sweetalert2";
require("dotenv").config();

export default function App(props) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    console.log("componentdidmount");
    fetch(API_URL + "?city_id=10", {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        setCollections(data.collections);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <NavbarComponent></NavbarComponent>
      <div>
        <Container fluid>
          <Row>
            <ListCategories collections={collections} addToFavor={addToFavor} />
          </Row>
        </Container>
      </div>
    </div>
  );
}
