import { combineReducers, createStore } from "redux";

const initialState = {
  trackData: {
    trackList: [],
  },

  // modalVisibility: false,

  // loginModalVisibility: false,

  // user_data: {
  //   userName: "",
  // },
};

function trackDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_TRACK_LIST":
      return { ...state, trackList: action.payload };
    default:
      return state;
  }
}

// function modalVisibilityChangeReducer(state = {}, action) {
//   switch (action.type) {
//     case "SET_TRUE":
//       return (state = true);
//     case "SET_FALSE":
//       return (state = false);
//     default:
//       return state;
//   }
// }

// function loginModalVisibilityReducer(state = {}, action) {
//   switch (action.type) {
//     case "SET_LOGIN_TRUE":
//       return (state = true);
//     case "SET_LOGIN_FALSE":
//       return (state = false);
//     default:
//       return state;
//   }
// }

// function userDataReducer(state = {}, action) {
//   switch (action.type) {
//     case "SET_USERNAME":
//       return { ...state, userName: action.payload };
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  trackData: trackDataReducer,
  // modalVisibility: modalVisibilityChangeReducer,
  // loginModalVisibility: loginModalVisibilityReducer,
  // user_data: userDataReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
