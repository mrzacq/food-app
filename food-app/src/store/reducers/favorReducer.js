import Swal from 'sweetalert2'

const initialState = {
  favorites: [],
};

function favorReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVOR":
      let hasDupsSimple = state.favorites.find(
        (el) => el.id === action.payload.restaurant.id
      );

      if (hasDupsSimple) {
        Swal.fire({
          icon: "error",
          title: "Restaurant already exist in your favorit",
          timer: 3000,
          showConfirmButton: false,
        });
        return state;
      } else {
        let newFavor = state.favorites.concat(action.payload.restaurant);
        return { ...state, favorites: newFavor };
      }
    default:
      return state;
  }
}

export default favorReducer