import React from 'react';
import PDFViewer22 from './Second';

const Appu = () => {
  const filePath = 'http://localhost:5199/wwwroot/CourseMaterial/e778eb3c-fec3-4b60-afb3-f632ceb0ebfe_Click_to_view_you__Security_Awareness_Certificate.pdf';

  return (
    <div>
      <PDFViewer22 filePath={filePath} />
    </div>
  );
};

export default Appu;