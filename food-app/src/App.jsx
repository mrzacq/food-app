import React from "react";
import Navigation from "./components/Navigation";
import Restaurant from "./components/Restaurant";
import Favorite from "./components/Favorite"
import Detail from "./components/Detail"
import Footer from "./components/Footer";
import useFetch from "./helper/useFetch";
import { Container } from "react-bootstrap";
import API_URL from "./utils/constant";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  const [restaurants, loading] = useFetch(
    API_URL + "search",
    {
      headers: {
        "user-key": process.env.REACT_APP_USER_KEY,
        "content-type": "application/json",
      },
    }
  );

  if (loading) return <h1>Loading....</h1>;

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
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <div>
          <Switch>
            <Route exact path="/">
              <Container fluid>
                <Restaurant
                  restaurants={restaurants}
                  addToFavor={addToFavor}
                />
              </Container>
            </Route>
            <Route path="/favorite">
              <Favorite></Favorite>
            </Route>
            <Route path="/detail/:id">
              <Detail></Detail>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}
