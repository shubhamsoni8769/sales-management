import { createStore, combineReducers } from "redux";
import { invioceFormReducer } from "./Vendor/Reducer";

const rootReducers = combineReducers({
  invioceForm: invioceFormReducer,
});

export default createStore(rootReducers);