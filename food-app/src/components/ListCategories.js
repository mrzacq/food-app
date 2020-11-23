import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class ListCategories extends Component {
    render(props) {
        return (
            <Col md={2} mt="4">
                {props.coll.map(el => {
                    return <div key={el.collection.collection_id}>
                        <p>{el.collection.description}</p>
                        <img src={el.collection.image_url} alt=""></img>
                    </div>
                })}
            </Col>
        )
    }
}
