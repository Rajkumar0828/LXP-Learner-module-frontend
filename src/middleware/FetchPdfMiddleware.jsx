// import { FETCH_PDF_REQUEST,fetchPdfSuccess,fetchPdfFailure } from "../actions/FetchPdfAction";
// import axios from "axios";

// const fetchPdfApi=({dispatch})=>(next)=>async(action)=>{
    
//     const topicId = "2ee9c6d2-c3a1-4c05-97dc-60203ab8a8c0"; // Hardcoded topic ID
//     if(action.type===FETCH_PDF_REQUEST){
//         try{
//         const response=await axios.get(`http://localhost:5199/lxp/course/topic/${topicId}/materialtype/${action.payload}`);

//         console.log('API Response:',response.data);
//         dispatch(fetchPdfSuccess(response.data));
//         console.log("successfullresponse",response.data);
//         }catch(error){
//             console.log("API Error",error.message);
//             dispatch(fetchPdfFailure(error.message));
//         }
      
//     }
//     return next(action);
// }
// export default fetchPdfApi;
