import { applyMiddleware, combineReducers, createStore } from "redux";
//Cấu hình middlewrare (Để có thể dispatch redux 1 action là function)
import ThemeReducer from "./reducers/ThemeReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ ThemeReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
