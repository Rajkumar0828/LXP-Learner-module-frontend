import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
function Moye() {
  const docs = [
    {
      uri: "https://espace.cern.ch/amici/Public%20Documents/How%20to%20create%20URL%20to%20public%20document.docx",
      fileType: "docx",
      fileName: "demo.docx",
    }, 

    
    // {
    //     uri: require("../PDF/Batch 2 - Capstone Requirement Document.pdf"),
    //     fileType: "pdf",
    //     fileName: "Batch 2 - Capstone Requirement Document.pdf",
    //   },


      {
        uri:"https://relevantztech-my.sharepoint.com/:p:/g/personal/keerthivasan_kamalakannan_relevantz_com/Ec_jMYz-I49CkhWo-cCImtsBVEDaHeoWABRGzPvpdxoELQ?e=KYz7v3",
        fileType: "pptx",
        fileName: "Template1.pptx",
      },
  ];

  return (
    <div>
      <h1>Document name</h1>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 1000 }}
      />
    </div>
  );
}

export default Moye;


// import React from 'react';
// import { DocViewer, DocViewerRenderers } from 'react-doc-viewer';

// function Moye() {
//   // Ensure your local server is running and the PPTX file is accessible at this URL
//   const docs = [
//     {
//       uri: 'http://localhost:5199/wwwroot/CourseMaterial/d7638e9f-83bb-4964-999c-137b22348674_Relevantz Template1.pptx',
//       fileType: 'pptx',
//       fileName: 'Relevantz Template1.pptx',
//     },
//   ];

//   return (
//     <div>
//       <h1>Document Viewer</h1>
//       <DocViewer
//         documents={docs}
//         pluginRenderers={DocViewerRenderers}
//         style={{ height: '100vh' }} // Adjust the height as needed
//       />
//     </div>
//   );
// }

// export default Moye;



