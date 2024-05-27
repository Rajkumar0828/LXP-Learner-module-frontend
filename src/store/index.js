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

import LearnerGetCourseReducer from '../reducers/LearnerReducer/LearnerGetCourseReducer';
import LearnerGetCourse from '../middleware/LearnerMiddleware/LearnerGetCourse';

import LearnerPostEnrollReducer from '../reducers/LearnerReducer/LearnerPostEnrollReducer';
import LearnerPostEnroll from '../middleware/LearnerMiddleware/LearnerPostEnroll';

 import enrollApi from "../middleware/LearnerMiddleware/EnrollCourseApi";
 import enrollmentReducer from "../reducers/LearnerReducer/EnrollmentReducer";
import fetchPdfReducer from '../reducers/LearnerReducer/FetchPdfReducer';







const rootReducer = combineReducers({
  forgotPassword: ForgotPasswordreducer,
  user: userReducer,
  course: courseReducer,
  allcourse: AllcourseReducer,
  deletecourse: DeletecourseReducer,
  updatecourse:courseupdateReducer,
  learner:LearnerReducer,
  email:emailReducer,
  otp:OTPReducer,
  fetchcourse: LearnerGetCourseReducer,
  enrolledCourses:LearnerPostEnrollReducer,
  fetchPdf: fetchPdfReducer,
  enroll: enrollmentReducer
});


const store = createStore(

  rootReducer,
  applyMiddleware(thunk, apiMiddleware,apiviewallcourse,loginUser,apiDeletecourse,UpdateCourse,RegisterApi,fetchEmailApi,VerifyEmailApi,LearnerGetCourse,LearnerPostEnroll,enrollApi)
);

export default store;

