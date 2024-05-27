// import React, { useEffect, useRef } from 'react';
// import pptxjs from 'pptxjs';
 
// const PowerPointViewerone = ({ filePath }) => {
//   const containerRef = useRef();
 
//   useEffect(() => {
//     pptxjs.parse(filePath).then(ppt => {
//       ppt.render(containerRef.current, {
//         width: 800,
//         height: 600
//       });
//     });
//   }, [filePath]);
 
//   return <div ref={containerRef}></div>;
// };
 
// export default PowerPointViewerone;