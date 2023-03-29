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
    // if the action type is 'ADD_TO_BASKET', return the state with the new item added to the basket
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // if the action type is 'REMOVE_FROM_BASKET', return the state with the item removed from the basket
    case 'REMOVE_FROM_BASKET':
      // find the index of the item in the basket
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // create a copy of the basket
      let newBasket = [...state.basket];

      // if the item is in the basket, remove it
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket!`
        );
      }

      // return the state with the new basket
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
