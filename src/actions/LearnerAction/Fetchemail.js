export const CREATE_EMAIL_REQUEST='CREATE_EMAIL_REQUEST';
export const CREATE_EMAIL_SUCCESS='CREATE_EMAIL_SUCCESS';
export const CREATE_EMAIL_FAILURE='CREATE_EMAIL_FAILURE';


export const userEmailRequest=(data)=>({
    type:CREATE_EMAIL_REQUEST,
    payload:data,
  })
  
  export const userEmailSuccess=(email)=>({
    type:CREATE_EMAIL_SUCCESS,
    payload:email,
  })
  
  export const userEmailFailure=(error)=>({
    type:CREATE_EMAIL_FAILURE,
    payload:error,
  })