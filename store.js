import { createStore } from "redux";
import reducer from "./reducers/videos";

const store = createStore(reducer, {
  categoryList: [],
  suggestionList: []
});

export default store;
