import React from "react";
import { Provider } from "react-redux";
import store from './store'
import Navigation from "./components/Navigation";
import Restaurant from "./views/Restaurant";
import Favorite from "./views/Favorite";
import Detail from "./views/Detail";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <div>
            <Switch>
              <Route exact path="/">
                <Container fluid>
                  <Restaurant />
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
