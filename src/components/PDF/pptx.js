// import React from 'react'
// import DocViewer,{DocViewerRenderers} from 'react-doc-viewer'

// function Npmdoc() {

// const docs=[


//     { uri:require("./") }
// ]


  




//   return (
//     <div className='Onelove'>

// <h1>hello santa</h1>

//         <DocViewer pluginRenderers={DocViewerRenderers}/>
//     </div>
//   )
// }

// export default Npmdoc



// import React from 'react';
// import PptxGenJS from 'pptxgenjs';

// function DownloadPPTX() {
//   const downloadPresentation = () => {
//     let pptx = new PptxGenJS();
//     let slide = pptx.addSlide();
//     slide.addText('Hello World!', { x: 1, y: 1, fontSize: 18 });
//     pptx.writeFile({ fileName: 'Sample Presentation.pptx' });
//   };

//   return (
//     <div>
//       <button onClick={downloadPresentation}>Download PPTX</button>
//     </div>
//   );
// }

// export default DownloadPPTX;


// import React from 'react';

// function DownloadPPTX() {
//   // Ensure your local server is running and the PPTX file is accessible at this URL
//   const localPptxUrl = 'http://localhost:5199/wwwroot/CourseMaterial/d7638e9f-83bb-4964-999c-137b22348674_Relevantz Template1.pptx';

//   // Encode the local URL to be used as a parameter
//   const encodedUrl = encodeURIComponent(localPptxUrl);

//   // Office Web Viewer URL
//   const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodedUrl}`;

//   return (
//     <div>
//       <h1>Document Viewer</h1>
//       <iframe
//         src={officeViewerUrl}
//         width="100%"
//         height="600"
//         frameBorder="0"
//       ></iframe>
//     </div>
//   );
// }

// export default DownloadPPTX;



