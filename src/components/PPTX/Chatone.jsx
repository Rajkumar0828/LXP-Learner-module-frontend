// import React from 'react';
 
// const PowerPointViewer = ({ fileUrl }) => (
//   <iframe
// src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`}
//     width="100%"
//     height="500px"
//     frameBorder="0"
//   ></iframe>
// );
 
// export default PowerPointViewer;


import React from 'react';
import FileViewer from 'react-file-viewer';
 
const PowerPointViewer = ({ filePath }) => (
  <FileViewer fileType="pptx" filePath={filePath} />
);
 
export default PowerPointViewer;
