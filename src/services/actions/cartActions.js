// Action Types
export const ADD_TO_LIKED = 'ADD_TO_LIKED';
export const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED';

// Action Creators
export const addToLiked = (product) => ({
  type: ADD_TO_LIKED,
  payload: product
});

export const removeFromLiked = (productId) => ({
  type: REMOVE_FROM_LIKED,
  payload: productId
});
