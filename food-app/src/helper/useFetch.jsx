import { useState, useEffect } from "react";

function useFetch(url, headers) {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("componentdidmount");
    setLoading(true);
    fetch(url, headers)
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        // console.log(data);
        setCollections(data.collections);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [collections, loading]
}

export default useFetch;
