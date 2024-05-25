import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import courseReducer from '../reducers/courseReducer';
import apiMiddleware from '../middleware/apiMiddleware';
import ForgotPasswordreducer from '../reducers/ForgotPasswordReducer';
import userReducer from '../reducers/loginReducer';
import AllcourseReducer from '../reducers/AllcourseReducer';
import apiviewallcourse from '../middleware/apiviewallcourse';
import loginUser from '../middleware/Admin/apiLogin';
import apiDeletecourse from '../middleware/Admin/apiDeletecourse';
import DeletecourseReducer from '../reducers/Admin/DeletecourseReducer';
import UpdateCourse from '../middleware/Admin/apiUpdatecourse';
import courseupdateReducer from '../reducers/Admin/Updatecourse';
import LearnerReducer from '../reducers/LearnerReducer/Registerreducer';
import {RegisterApi}   from '../middleware/LearnerMiddleware/RegisterApi';
import emailReducer from '../reducers/LearnerReducer/FetchEmailReducer';
import fetchEmailApi from '../middleware/LearnerMiddleware/FetchEmailApi';
import OTPReducer from '../reducers/LearnerReducer/OTPReducer';
import VerifyEmailApi from '../middleware/LearnerMiddleware/VerifyEmailApi';

const rootReducer = combineReducers({
  forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse:courseupdateReducer,
  learner:LearnerReducer,
  email:emailReducer,
  otp:OTPReducer
});


const store = createStore(

  rootReducer,
  applyMiddleware(thunk, apiMiddleware,apiviewallcourse,loginUser,apiDeletecourse,UpdateCourse,RegisterApi,fetchEmailApi,VerifyEmailApi)
);

export default store;

