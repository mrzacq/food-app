import { useState, useEffect } from "react";

function useFetch(url, headers) {
  const [restaurants, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, headers)
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        // console.log(data);
        setCollections(data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [restaurants, loading]
}

export default useFetch;
