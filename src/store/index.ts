import { createStore } from "redux";
import { IcartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: IcartState;
}

const store = createStore(rootReducer);

export default store;
