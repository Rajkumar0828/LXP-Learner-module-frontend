// import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import pdfdoc from '../../LMS Wireframe.pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function ViewMaterials() {
//     const [numPages, setNumPages] = React.useState(null);
//     const [pageNumber, setPageNumber] = React.useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div>
//             <Document
//                 file={pdfdoc}
//                 onLoadSuccess={onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={pageNumber} />
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//         </div>
//     );
// }

// export default ViewMaterials;




import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function ViewMaterials() {
    const pdfUrl = require('D:/Rubanupdateprofilefinal22/src/Batch 2 - Capstone Requirement Document.pdf');
    // const pdfUrl = '/Batch 2 - Capstone Requirement Document.pdf';


    return (
        <div className='bg-primary' style={{ height: '750px' }}>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} />
            </Worker>
        </div>
    );
}

export default ViewMaterials;
