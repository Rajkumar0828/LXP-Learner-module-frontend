export const FETCH_TOPICPDF_REQUEST='FETCH_TOPICPDF_REQUEST';
export const FETCH_TOPICPDF_SUCCESS='FETCH_TOPICPDF_SUCCESS';
export const FETCH_TOPICPDF_FAILURE='FETCH_TOPICPDF_FAILURE';


export const fetchTopicpdf=(dataone)=>(
    {

        type:FETCH_TOPICPDF_REQUEST,
        payload:dataone
    }
)

export const fetchTopicPdfSuccess=(pdfone)=>({
    type:FETCH_TOPICPDF_SUCCESS,
    payload:pdfone,
})

export const fetchTopicPdfFailure=(error)=>({
    type:FETCH_TOPICPDF_FAILURE,
    payload:error,
})