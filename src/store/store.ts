import { EnhancedStore, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import createRootReducer from "./reducer/rootReducer";
import {createLogger} from "redux-logger";
import { createRootReducer } from "./reducer/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { getT20Ranking, rankingSaga } from "../saga/rankingSaga";
import { authSaga } from "../saga/authSaga";
import rootSaga from "../saga/rootSaga";
// import createRootReducer  from "./reducer/rootReducer";

const middleware = getDefaultMiddleware();
const sagaMiddleware = createSagaMiddleware();
// middleWare.push(logger)
const logger = createLogger({
    level: "info",
    collapsed: true
});

//  type  store1 = EnhancedStore;

middleware.push(logger);
middleware.push(sagaMiddleware);
export const store: EnhancedStore = configureStore({
    reducer: createRootReducer,
    middleware
  });
sagaMiddleware.run(rootSaga);
// export default store;
