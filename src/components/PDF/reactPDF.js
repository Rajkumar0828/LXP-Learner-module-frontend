import React from 'react';
import { Document, Page } from 'react-pdf';

export default function Rfetch() {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pdfFile = "http://localhost:5199/wwwroot/CourseMaterial/e778eb3c-fec3-4b60-afb3-f632ceb0ebfe_Click_to_view_you__Security_Awareness_Certificate.pdf";

  return (
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
