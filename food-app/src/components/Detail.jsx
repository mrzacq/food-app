import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { collections } = props;
  const {collection_id} = useParams();
  const detail = []
  for(let i = 0; i < collections.length; i++){
    const obj = collections[i]
    console.log(obj, 'ini isinya')
    if(obj.collection.collection_id === collection_id){
        detail.push(obj.collection)
    }
  }
  console.log(detail, collection_id)
  return (
    <Container className="mt-4">
          <Card
            style={{ width: "25rem" }}
            className="mx-auto my-2"
          >
              {detail[0]}
          </Card>
    </Container>
  );
}

export default Detail;
