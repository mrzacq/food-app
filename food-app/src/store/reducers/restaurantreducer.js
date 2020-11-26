const initialState = {
    restaurants: [],
    loading: true,
    error: false
  };
  
  function restaurantReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_RESTAURANTS":
        return { ...state, restaurants: action.payload };
      case "SET_LOADING":
        return { ...state, loading: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default: 
          return state
    }
  }
  
  export default restaurantReducer