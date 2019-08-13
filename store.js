import {createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/videos";

// const store = createStore(reducer, {
//     categoryList: [],
//     suggestionList: []
// });

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
