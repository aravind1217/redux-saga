import { applyMiddleware ,legacy_createStore as createStore} from "redux";

import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
 

import rootSaga from "./userSaga";

const sagaMiddleware=createSagaMiddleware()
console.log(sagaMiddleware)
const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga)

export default store