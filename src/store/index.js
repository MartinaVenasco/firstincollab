import { combineReducers, createStore } from "redux";

const initialState = {
  cartData: {
    Uuid: "",
    cartList: [],
    purchasedList: [],
  },

  modalVisibility: false,

  loginModalVisibility: false,

  user_data: {
    userName: "",
  },
};

function cartDataReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      state.cartList = [...state.cartList, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      return { ...state, cartList: state.cartList };
    case "REMOVE_PRODUCT":
      state.cartList = state.cartList.filter((_, id) => id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      return {
        ...state,
        cartList: state.cartList,
      };
    case "SET_UUID":
      return { ...state, Uuid: action.payload };
    case "BUY_ITEMS":
      return { ...state, purchasedList: state.cartList };
    case "CLEAR_PRODUCT":
      return { ...state, cartList: [] };
    case "RESTORE_CART":
      return { ...state, cartList: action.payload };
    default:
      return state;
  }
}

function modalVisibilityChangeReducer(state = {}, action) {
  switch (action.type) {
    case "SET_TRUE":
      return (state = true);
    case "SET_FALSE":
      return (state = false);
    default:
      return state;
  }
}

function loginModalVisibilityReducer(state = {}, action) {
  switch (action.type) {
    case "SET_LOGIN_TRUE":
      return (state = true);
    case "SET_LOGIN_FALSE":
      return (state = false);
    default:
      return state;
  }
}

function userDataReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cartData: cartDataReducer,
  modalVisibility: modalVisibilityChangeReducer,
  loginModalVisibility: loginModalVisibilityReducer,
  user_data: userDataReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
