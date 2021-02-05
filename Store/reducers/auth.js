import {
  USER_REGISTERED,
  USER_LOGGED_OUT,
  ALL_USERS,
  A_NEGATIVE,A_POSITIVE,B_NEGATIVE,B_POSITIVE,O_NEGATIVE,O_POSITIVE,AB_POSITIVE
} from '../constants/actiontypes';

const INIT_STATE = {
  auth: null,
  users: [],
  anegative:[],
  apositive:[],
  bnegative:[],
  bpositive:[],
  onegative:[],
  opositive:[],
  abnegative:[],
  abpositive:[],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return {
        ...state,
        auth: action.payload,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        auth: null,
      };
    case ALL_USERS: {
      let usersArray = state.users.slice(0);
      let newUser = true;
      usersArray.map((recipient) => {
        if (recipient.uid === action.payload.uid) {
          newUser = false;
        }
      });

      if (usersArray.length === 0 || newUser) {
        usersArray.push(action.payload);
      }
      return {
        ...state,
        users: usersArray,
      };
    }
    case A_NEGATIVE:{
      let userA_Negative = state.anegative.slice(0);
      let newANegative = true;
      userA_Negative.map((recipient) => {
        if (recipient.uid === action.payload.uid) {
          newANegative = false;
        }
      });

      if (userA_Negative.length === 0 || newANegative) {
        userA_Negative.push(action.payload);
      }
      return {
        ...state,
        anegative: userA_Negative,
      };
    }
    case A_POSITIVE:{
      let userA_Positive = state.apositive.slice(0);
      let newAPositive = true;
      userA_Positive.map((recipient) => {
        if (recipient.uid === action.payload.uid) {
          newAPositive = false;
        }
      });

      if (userA_Positive.length === 0 || newAPositive) {
        userA_Positive.push(action.payload);
      }
      return {
        ...state,
        apositive: userA_Positive,
      };
    }
    case AB_POSITIVE:{
      let userAB_Positive = state.abpositive.slice(0);
      let newABPositive = true;
      userAB_Positive.map((recipient) => {
        if (recipient.uid === action.payload.uid) {
          newABPositive = false;
        }
      });

      if (userAB_Positive.length === 0 || newABPositive) {
        userAB_Positive.push(action.payload);
      }
      return {
        ...state,
        abpositive: userAB_Positive,
      };
    }

    case B_POSITIVE:{
      let userB_Positive = state.bpositive.slice(0);
      let newBPositive = true;
      userB_Positive.map((recipient) => {
        if (recipient.uid === action.payload.uid) {
          newBPositive = false;
        }
      });

      if (userB_Positive.length === 0 || newBPositive) {
        userB_Positive.push(action.payload);
      }
      return {
        ...state,
        bpositive: userB_Positive,
      };
    }

    case O_POSITIVE:{
      let userO_Positive = state.opositive.slice(0);
      let newOPositive = true;
      userO_Positive.map((recipient) => {
        if (recipient.uid === action.payload.uid) {
          newOPositive = false;
        }
      });

      if (userO_Positive.length === 0 || newOPositive) {
        userO_Positive.push(action.payload);
      }
      return {
        ...state,
        opositive: userO_Positive,
      };
    }
    default:
      return state;
  }
};
