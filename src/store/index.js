import { rootReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = () => {
  const initialState = JSON.parse(
    localStorage.getItem("store") ?? JSON.stringify({})
  );

  const persistMiddleware = (store) => (next) => (action) => {
    //   the order matters
    const result = next(action);
    const saveData = store.getState();
    delete saveData.error;
    delete saveData.success;
    localStorage.setItem("store", JSON.stringify(saveData));
    return result;
  };

  //   the order matters
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, persistMiddleware)
  );
};

export default store();
