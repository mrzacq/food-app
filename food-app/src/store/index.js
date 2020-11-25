import { createStore } from "redux";
import Swal from 'sweetalert2'
const initialState = {
  favorites: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOR":
      let newFavor = state.favorites.concat(action.payload.restaurant);
      var hasDupsSimple = function (newFavor) {
        return newFavor.some(function (value) {
          return newFavor.indexOf(value) !== newFavor.lastIndexOf(value); 
        });
      };
      if(hasDupsSimple(newFavor)){
        Swal.fire({
          icon: "error",
          title: "Restaurant already exists in your favorites",
          timer: 3000,
          showConfirmButton: false
        })
        newFavor.pop()
      }
      else {
        return { ...state, favorites: newFavor };
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
