export const addList = (item) => {
  return {
    type: "ADD_LIST",
    payload: item,
  };
};

export const deleteList = (items) => {
  return {
    type: "DELETE_LIST",
    payload: items,
  };
};
