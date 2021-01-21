import {RESTAURANT_FOOD_ADD} from '../constants/actiontypes';

const INIT_STATE = {
  dishes: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_FOOD_ADD:

      let allRecepients = state.dishes.slice(0);
      let newUser = true;
      allRecepients.map((recipient) => {
          if (recipient.dishName === action.payload.dishName) {
              newUser = false;
          }
      })

      if (allRecepients.length === 0 || newUser) {
          allRecepients.push(action.payload);
      }
      return {
        ...state,
        dishes: allRecepients,
      };
    default:
      return state;
  }
};
