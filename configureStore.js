import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./reducers/reducers";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export default (configureStore = () => {
  const store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return { store };
});

export const { store } = configureStore();
