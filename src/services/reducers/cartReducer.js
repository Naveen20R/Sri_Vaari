import { ADD_TO_LIKED, REMOVE_FROM_LIKED } from '../actions/cartActions';

const initialState = {
  cartItems: [],
  likedItems: [] // Add this for liked products
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      return {
        ...state,
        likedItems: [...state.likedItems, action.payload]
      };
    case REMOVE_FROM_LIKED:
      return {
        ...state,
        likedItems: state.likedItems.filter(item => item.id !== action.payload)
      };
    // other cases
    default:
      return state;
  }
};

export default cartReducer;
