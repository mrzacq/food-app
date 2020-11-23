import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import Menu from "./components/Menu";
import { Container, Row } from "react-bootstrap";
import API_URL from './utils/constant'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       collections: []
    }
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: API_URL + "?city_id=1",
      headers: {
        "user-key": "a6f1a7690003d63c7b617c04f8098693",
        "content-type": "application/json"
      }
    })
    .then(({data}) => {
      console.log(data)
      this.setState({ collections: data.collections })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render() {
    const { collections } = this.state
    return (
      <div className="App">
        <NavbarComponent></NavbarComponent>
        {/* {collections.map(el => <div key={el.collection.collection_id}>{el.collection.description}
        <img src={el.collection.image_url} alt=""/>
        </div>)} */}
        <div>
          <Container fluid>
            <Row>
              <ListCategories coll={collections}/>
              <Menu></Menu>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
