// define all the application level states and actions to make the changes to the state

export const initialState = {
  basket: [],
};

// Selector

// This is a function that takes the basket and returns the total amount of the basket
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

// Reducer is a function that takes the state and action and returns the new state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default reducer;
