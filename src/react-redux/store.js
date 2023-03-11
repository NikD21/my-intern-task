import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { categoriesReducer } from "./categories.reducer";
import { imagesReducer } from "./images.reducer";

export const rootReducer = combineReducers({
  catCategories: categoriesReducer,
  catImages: imagesReducer,
});

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhansers(applyMiddleware(thunkMiddleware))
);

export default store;
