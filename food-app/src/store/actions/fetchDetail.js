import API_URL from '../../utils/constant'

export default function fetchDetail() {
    return (dispatch) => {
      fetch(API_URL + `search`, {
        headers: {
          "user-key": process.env.REACT_APP_USER_KEY,
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          else return Promise.reject();
        })
        .then((data) => {
          dispatch({ type: "SET_DETAIL", payload: data.restaurants });
        })
        .catch((err) => {
          dispatch({ type: "SET_ERROR", payload: true });
        })
        .finally(() => {
          dispatch({ type: "SET_LOADING", payload: false });
        });
    };
  }