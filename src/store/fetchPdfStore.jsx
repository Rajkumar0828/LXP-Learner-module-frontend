import { createStore,combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import fetchPdfReducer from "../reducers/FetchPdfReducer";
// import fetchPdfApi from "../middleware/FetchPdfMiddleware";
// import { enrollReducer } from "../reducers/EnrollReducer";
import enrollApi from "../middleware/EnrollCourseApi";
import enrollmentReducer from "../reducers/EnrollmentReducer";
 const rootReducer=combineReducers({
   fetchPdf:fetchPdfReducer,
    enroll: enrollmentReducer
 })

 const Store=createStore(
    rootReducer,applyMiddleware(thunk,enrollApi)
 );
 export default Store;