import  { useState } from 'react';
import axios from 'axios';
import { CREATE_EMAIL_REQUEST,userEmailSuccess,userEmailFailure} from '..//../actions/LearnerAction/Fetchemail';

const API = 'http://localhost:5199/api/Email/EmailVerification'

const fetchEmailApi =({dispatch}) => (next) => async(action)=>{
    if(action.type === CREATE_EMAIL_REQUEST)
    {
        try{
            console.log("request payload",action.payload);
            const response = await axios.post(API,action.payload);
            console.log('API Response:', response.data);
            const otp = response.data; 
            console.log("otp:", otp);
            dispatch(userEmailSuccess(response.data.otp))
            console.log("test",action.payload)
        }
        catch(error){
            dispatch(userEmailFailure(error))
        }
    }
    return next(action)
};   

export default fetchEmailApi;
