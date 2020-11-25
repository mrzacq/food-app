import React from "react";
import { Provider } from "react-redux";
import store from './store'
import Navigation from "./components/Navigation";
import Restaurant from "./components/Restaurant";
import Favorite from "./components/Favorite";
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import useFetch from "./helper/useFetch";
import { Container } from "react-bootstrap";
import API_URL from "./utils/constant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App(props) {
  const [restaurants, loading] = useFetch(API_URL + "search", {
    headers: {
      "user-key": process.env.REACT_APP_USER_KEY,
      "content-type": "application/json",
    },
  });

  return (
    <Provider store={store}>
      <Router>
        <div className="App" style={{ backgroundImage: "https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg", backgroundPosition: 'center', backgroundSize: 'cover'}}>
          <Navigation restaurants={restaurants}></Navigation>
          <div>
            <Switch>
              <Route exact path="/">
                <Container fluid>
                  <Restaurant
                    restaurants={restaurants}
                    loading={loading}
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
    </Provider>
  );
}
