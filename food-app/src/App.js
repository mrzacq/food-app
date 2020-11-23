import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import { Container, Row } from "react-bootstrap";
import API_URL from './utils/constant'
import axios from 'axios'
import Swal from 'sweetalert2'

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
      url: API_URL + "?city_id=" + (Math.floor(Math.random()*100) + 1),
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

  addToFavor(event, id){
    event.preventDefault()
    console.log(id, 'ini data favorit')
    Swal.fire({
      icon: "success",
      title: "Success add to favorite",
      timer: 3000,
      showConfirmButton: false
    })
  }

  render() {
    const { collections } = this.state
    return (
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <div>
          <Container fluid>
            <Row>
              <ListCategories collections={collections} addToFavor={this.addToFavor}/>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
