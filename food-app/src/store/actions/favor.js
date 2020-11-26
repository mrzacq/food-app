function setFavor(restaurant) {
  return {
    type: "ADD_TO_FAVOR",
    payload: { restaurant },
  };
}

export default setFavor
