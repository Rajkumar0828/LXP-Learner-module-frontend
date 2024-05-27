// // Final one

// import React, { useState, useEffect } from "react";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPdfRequest } from "../../actions/FetchPdfAction";
// import Mycourse from "../LearnerComponent/Mycourse";

// function PDFViewer() {
//   // const [file,setFile]= useState();
//   const [error, setError] = useState(null);
//   //   const newPlugin = defaultLayoutPlugin({
//   //     toolbar: {
//   //       download: {
//   //         enabled: true,
//   //       },
//   //     },
//   //   });

//   const newPlugin = defaultLayoutPlugin({
//     toolbar: {
//       download: {
//         enabled: false, // Disable the download button
//       },
//     },
//   });

//   const [fileresponse, setFileResponse] = useState([0]);

//   const pdf = useSelector((state) => state.fetchPdf.material);

//   console.log("view page pfd checking", pdf);

//   useEffect(() => {
//     setFileResponse(pdf);
//   }, [pdf]);

//   const [viewpdf, setViewPdf] = useState();
//   //   let url;

//   console.log("filepath", fileresponse.filePath);

//   const url = `${fileresponse.filePath}`;

//   console.log("fileurl", url);

//   const materialId = "3da3c70b-5120-433a-8edc-cf29dfde09a1"; // Hardcoded material ID
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchPdfRequest(materialId))
//       //fetchPDFFromBackend()
//       .then((response) => {
//         console.log("Fetched PDF file path:", response);
//         setViewPdf(response);
//       })
//       .catch((error) => {
//         console.error("Error fetching PDF:", error);
//         setError(error.message);
//       });
//   }, []);

//   //   const fetchPDFFromBackend = async () => {
//   //     try {
//   //       const topicId = "65d5b802-afc2-49fa-ab17-0295d91c01a5"; // Hardcoded topic ID

//   //       const response = await axios
//   //         .get(
//   //           `http://localhost:5199/lxp/course/topic/${topicId}/materialtype/${materialId}`
//   // responseType: 'blob',
//   // Set the response type to 'blob'
//   // )
//   //   await axios
//   //     .get(response.data[0].filePath, {
//   //       headers: {
//   //         "Access-Control-Allow-Origin": "*",
//   //         "Access-Control-Allow-Methods": "*",
//   //         // 'responseType': 'blob'
//   //       },
//   //     })
//   //     .then((response) => {
//   //       console.log("pdfresponse", response.data);
//   //       setFileResponse(response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   //   console.log("file", fileresponse);

//   //   const blob = new Blob([fileresponse], { type: "text/plain" });

//   // If you need to create a URL for the Blob, you can use the URL.createObjectURL() method
//   //   url = URL.createObjectURL(blob);
//   // url='http://localhost:5199/wwwroot/CourseMaterial/e778eb3c-fec3-4b60-afb3-f632ceb0ebfe_Click_to_view_you__Security_Awareness_Certificate.pdf'

//   // blobUrl can now be used as a source for downloading or linking
//   //   url={fileresponse.filePath}
//   //   console.log(url);
//   //   const blob = await fileresponse.blob();
//   //   const blobUrl = URL.createObjectURL(blob);

//   //  url = window.URL.createObjectURL(fileresponse);
//   //   console.log(url);
//   //   return url; // Return the URL for the PDF blob
//   //     } catch (error) {
//   //       console.error("Error fetching PDF:", error);
//   //       setError(error.message);
//   //     }
//   //   };
//   //   console.log("filepath",fileresponse[0].filePath);

//   return (
//     <div>

//     <div className="container">
//       <div className="pdf-container">
//         {/* Use the Worker from react-pdf-viewer */}
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
//           {/* {viewpdf ? ( */}
//           <Viewer fileUrl={url} plugins={[newPlugin]} />
//           {/* ) : (
//             <>No PDF</>
//           )} */}
//         </Worker>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default PDFViewer;

import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPdfRequest } from "../../actions/FetchPdfAction";
import { Container, Row } from "react-bootstrap";

function PDFViewer(prop) {
  const [error, setError] = useState(null);
  const {material}= prop;
  const [viewpdf, setViewPdf] = useState(material);

  const [fileResponse, setFileResponse] = useState([]);
 useEffect(()=>{
console.log(prop);
 },[])
  const newPlugin = defaultLayoutPlugin({
    toolbar: {
      download: {
        enabled: false, // Disable the download button
      },
    },
  });
  useEffect(()=>{
    setViewPdf(material)
  },[material])

  // const pdf = useSelector((state) => state.fetchPdf.material);

  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const materialId = "3da3c70b-5120-433a-8edc-cf29dfde09a1"; // Hardcoded material ID

  //   // const {materialId}=prop; // Hardcoded material ID
  //   console.log(materialId);

  //   dispatch(fetchPdfRequest(materialId))
  //     .then((response) => {
  //       console.log("Fetched PDF file path:", response);
  //       setFileResponse(response); // Assuming response is an array
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching PDF:", error);
  //       setError(error.message);
  //     });
  // }, [dispatch]);

  // useEffect(() => {
  //   if (pdf && pdf.length > 0) {
  //     setViewPdf(material); // Automatically select the first PDF in the array
  //   }
  // }, [pdf]);

 
  // useEffect(() => {
  //   if (fileResponse.length > 0) {
  //     console.log("filepath", fileResponse[0].filePath); // Log file path
  //     const url = `${fileResponse[0].filePath}`; // Construct the URL
  //     console.log("fileurl", url);
  //     setViewPdf(material); // Set the viewpdf state with the URL
  //   }
  // }, [fileResponse]);

  return (
    <Container >
     <Row className="justify-content-md-center">
     <div
          className="container"
          style={{ width: "100%", height: "100vh", overflow: "auto",marginTop:'7px'}}
        >
        <div className="pdf-container" style={{ width: 1250 }}>
          {error && <div className="error">{error}</div>}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            {viewpdf ? (
              <Viewer fileUrl={viewpdf} plugins={[newPlugin]} />
            ) : (
              <div>No PDF available</div>
            )}
          </Worker>
        </div>
      </div>
     </Row>
    </Container>
    // <Container>
    //   <Row className="justify-content-md-center">
    //     <div
    //       className="container"
    //       style={{ width: "100%", height: "100vh", overflow: "auto",marginTop:'25px'}}
    //     >
    //       <div className="pdf-container" style={{ width: 1200 }}>
    //         {error && <div className="error">{error}</div>}
    //         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
    //           {viewpdf ? (
    //             <Viewer fileUrl={viewpdf} />
    //           ) : (
    //             <div>No PDF available</div>
    //           )}
    //         </Worker>
    //       </div>
    //     </div>
    //   </Row>
    // </Container>
  );
}

export default PDFViewer;
