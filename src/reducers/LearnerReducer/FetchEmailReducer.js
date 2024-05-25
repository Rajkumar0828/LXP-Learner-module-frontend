import { CREATE_EMAIL_REQUEST,CREATE_EMAIL_SUCCESS,CREATE_EMAIL_FAILURE } from "..//../actions/LearnerAction/Fetchemail";

const initialState = {
    email:null,
    loading:false,
    error:null,
};

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EMAIL_REQUEST:
            return {
                ...state,
                loading:true,
            };

        case CREATE_EMAIL_SUCCESS:
            console.log("res",action.payload);
            return{
                ...state,
                loading:false,
                email: action.payload,

            };
            
        case CREATE_EMAIL_FAILURE:
            return{
              ...state,
              loading:false,
              error:action.payload,
            };    
        default:
            return state;
    }
};

export default emailReducer;