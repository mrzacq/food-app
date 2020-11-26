const initialState = {
  detail: [],
  loading: true,
  error: false
};

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DETAIL":
      return { ...state, detail: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default: 
        return state
  }
}

export default detailReducer