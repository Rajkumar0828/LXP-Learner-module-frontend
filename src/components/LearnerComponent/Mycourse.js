// // import React, { useState } from 'react';
// // import '../Styles/Navbar.css';
// // import Students from './Students';
// // import AssessmentEvaluation from './AssessmentEvaluation';
// // import logo from '../Images/logo.png';
// // import { Document, Page } from 'react-pdf';
// // // import { Document, Page } from 'react-pdf';

// // function Mycourse() {
// //     const [folders, setFolders] = useState([

// //         {
// //             name: 'Arun',
// //             isOpen: false,
// //             files: ['Founation scores', 'Core scores', 'My-Sql workbench scores', 'Git scores'],
// //         },
// //         {
// //             name: 'HTML',
// //             isOpen: false,
// //             files: ['PPT', 'PDF', 'TEXT', 'VIDEO','AUDIO'],
// //         },
// //         {
// //             name: 'Batch 2',
// //             isOpen: false,
// //             files: ['Students 2.1', 'Assessment Evaluation 2.2', 'Assignment Evaluation 2.3', ' Assignment 2.4'],
// //         },
// //         {
// //             name: 'Batch 3',
// //             isOpen: false,
// //             files: ['Students 3.1', 'Assessment Evaluation 3.2', 'Assignment Evaluation 3.3', 'Assignment 3.4'],
// //         },

// //     ]);

// //     const [selectedComponent, setSelectedComponent] = useState(null);

// //     const toggleFolder = (index) => {
// //         const updatedFolders = [...folders];
// //         updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
// //         setFolders(updatedFolders);
// //     };

// //     const handleFileClick = (file) => {
// //         switch (file) {
// //             case 'PPT': setSelectedComponent(<Students />);
// //                 break;
// //             case 'PDF': setSelectedComponent(<Document file={file}>
// //                                                 <Page pageNumber={1} />
// //                                               </Document>);
// //                 break;
// //             case 'Assessment Evaluation 1.2': setSelectedComponent(<AssessmentEvaluation />);
// //                 break;
// //             default:
// //                 setSelectedComponent(null);
// //                 break;
// //         }
// //     };

// //     return (
// //         <div>
// //             <nav class="navbar navbar-expand-sm navbar-default navbar-fixed-top">
// //                 <div class="container-fluid">
// //                     <a class="navbar-brand" href="#">
// //                         <div className='logo'>
// //                         <img src={logo} alt="Logo" style={{width:100,height:25}} class="rounded-pill" />
// //                         </div>
// //                     </a>
// //                 </div>
// //             </nav>
// //             <div className='d-flex'>
// //                 <div className='side'>
// //                     <ul className="tree" style={{width:250}}>
// //                         {folders.map((folder, index) => (
// //                             <li key={index} className={`folder ${folder.isOpen ? 'open' : ''}`} onClick={() => toggleFolder(index)}>
// //                                 {folder.isOpen ? '-' : '+'} {folder.name}
// //                                 {folder.isOpen && (
// //                                     <ul>
// //                                         {folder.files.map((file, fileIndex) => (
// //                                             <li key={fileIndex} className="file" onClick={() => handleFileClick(file)}>
// //                                                 {file}
// //                                             </li>
// //                                         ))}
// //                                     </ul>
// //                                 )}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //                 {selectedComponent}

// //             </div>
// //         </div>
// //     );
// // }

// // export default Mycourse;

// // import React, { useState } from 'react';
// // import '../Styles/Navbar.css';
// // import Students from './Students';
// // import AssessmentEvaluation from './AssessmentEvaluation';
// // import logo from '../Images/logo.png';
// // import { Document, Page } from 'react-pdf';

// // function Mycourse() {
// //     const [numPages, setNumPages] = useState(null);
// //     const [pageNumber, setPageNumber] = useState(1);

// //     function onDocumentLoadSuccess({ numPages }) {
// //         setNumPages(numPages);
// //     }

// //     // ... rest of your code ...

// //     const [folders, setFolders] = useState([

// //         {
// //             name: 'Arun',
// //             isOpen: false,
// //             files: ['Founation scores', 'Core scores', 'My-Sql workbench scores', 'Git scores'],
// //         },
// //         {
// //             name: 'HTML',
// //             isOpen: false,
// //             files: ['PPT', 'PDF', 'TEXT', 'VIDEO','AUDIO'],
// //         },
// //         {
// //             name: 'Batch 2',
// //             isOpen: false,
// //             files: ['Students 2.1', 'Assessment Evaluation 2.2', 'Assignment Evaluation 2.3', ' Assignment 2.4'],
// //         },
// //         {
// //             name: 'Batch 3',
// //             isOpen: false,
// //             files: ['Students 3.1', 'Assessment Evaluation 3.2', 'Assignment Evaluation 3.3', 'Assignment 3.4'],
// //         },

// //     ]);

// //     const [selectedComponent, setSelectedComponent] = useState(null);

// //     const toggleFolder = (index) => {
// //         const updatedFolders = [...folders];
// //         updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
// //         setFolders(updatedFolders);
// //     };

// //     const handleFileClick = (file) => {
// //         switch (file) {
// //             case 'PPT': setSelectedComponent(<Students />);
// //                 break;
// //             case 'PDF': setSelectedComponent(
// //                 <Document
// //                     file={'/sample.pdf'}
// //                     onLoadSuccess={onDocumentLoadSuccess}
// //                 >
// //                     <Page pageNumber={pageNumber} />
// //                 </Document>
// //             );
// //                 break;
// //             case 'Assessment Evaluation 1.2': setSelectedComponent(<AssessmentEvaluation />);
// //                 break;
// //             default:
// //                 setSelectedComponent(null);
// //                 break;
// //         }
// //     };

// //     // ... rest of your code ...
// // }

// // export default Mycourse;

// // import React, { useState } from 'react';
// // import '../Styles/Navbar.css';
// // import Students from './Students';
// // import AssessmentEvaluation from './AssessmentEvaluation';
// // import logo from '../Images/logo.png';
// // import { Document, Page } from 'react-pdf';

// // function Mycourse() {
// //     const [numPages, setNumPages] = useState(null);
// //     const [pageNumber, setPageNumber] = useState(1);
// //     const [folders, setFolders] = useState([
// //         {
// //                         name: 'Arun',
// //                         isOpen: false,
// //                         files: ['Founation scores', 'Core scores', 'My-Sql workbench scores', 'Git scores'],
// //                     },
// //                     {
// //                         name: 'HTML',
// //                         isOpen: false,
// //                         topics: [
// //                           {
// //                             name: 'Introduction',
// //                             files: ['PPT', 'PDF', 'TEXT', 'VIDEO', 'AUDIO'],
// //                           },
// //                           // Add more topics here...
// //                         ],},
// //                     {
// //                         name: 'Batch 2',
// //                         isOpen: false,
// //                         files: ['Students 2.1', 'Assessment Evaluation 2.2', 'Assignment Evaluation 2.3', ' Assignment 2.4'],
// //                     },
// //                     {
// //                         name: 'Batch 3',
// //                         isOpen: false,
// //                         files: ['Students 3.1', 'Assessment Evaluation 3.2', 'Assignment Evaluation 3.3', 'Assignment 3.4'],
// //                     },

// //                 ]);

// //     const [selectedComponent, setSelectedComponent] = useState(null);

// //     function onDocumentLoadSuccess({ numPages }) {
// //         setNumPages(numPages);
// //     }

// //     const toggleFolder = (index) => {
// //         const updatedFolders = [...folders];
// //         updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
// //         setFolders(updatedFolders);
// //     };

// //     const handleFileClick = (file) => {
// //         switch (file) {
// //             case 'PPT':
// //                 setSelectedComponent(<Students />);
// //                 break;
// //             case 'PDF':
// //                 setSelectedComponent(
// //                     <Document file={'/Behavioural Final Assessment.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
// //                         <Page pageNumber={pageNumber} />
// //                     </Document>
// //                 );
// //                 break;
// //             case 'Assessment Evaluation 1.2':
// //                 setSelectedComponent(<AssessmentEvaluation />);
// //                 break;
// //             default:
// //                 setSelectedComponent(null);
// //                 break;
// //         }
// //     };

// import React, { useState } from 'react';
// import '../../Styles/Navbarone.css';
// // import logo from '../Images/logo.png';
// import logo from '../../../src/Images/logo.png'

// import { Document, Page } from 'react-pdf';
// import { UseDispatch,useDispatch,useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';

// function Mycourse() {

//   const selectedCourse = useSelector((state) => state.enroll.selectedCourse);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//       }

//       function onDocumentLoadError({ message }) {
//         console.error("Failed to load document: " + message);
//       }

//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const viewcourse=useSelector((state)=>state.enroll.course[0])
//   const [folders, setFolders] = useState([

//      {
//         name: selectedCourse ? selectedCourse.enrolledCoursename : 'Loading...',
//         isOpen: false,
//         topics: selectedCourse && selectedCourse.topics
//             ? selectedCourse.topics.map(topic => ({
//                 name: topic.topicName,
//                 isOpen: false,
//                 files: ['PPT', 'PDF', 'TEXT', 'VIDEO', 'AUDIO'],
//             }))
//             : [],
//     },

//   ]);

//   const [selectedComponent, setSelectedComponent] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const toggleFolder = (index) => {
//     const updatedFolders = [...folders];
//     updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
//     setFolders(updatedFolders);
//   };

//   const toggleTopic = (folderIndex, topicIndex) => {
//     const updatedFolders = [...folders];
//     // If the clicked topic is already open, just toggle its status
//     if (updatedFolders[folderIndex].topics[topicIndex].isOpen) {
//       updatedFolders[folderIndex].topics[topicIndex].isOpen = false;
//     } else {
//       // Otherwise, close all topics and open the clicked one
//       updatedFolders[folderIndex].topics.forEach(topic => {
//         topic.isOpen = false;
//       });
//       updatedFolders[folderIndex].topics[topicIndex].isOpen = true;
//     }
//     setFolders(updatedFolders);
//   };

//   const handleFileClick = (file) => {
//     switch (file) {
//       case 'PPT':
//         setSelectedComponent();
//         break;
//       case 'PDF':
//         setSelectedComponent(
//           // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//           //   <Document file={'/BehaviouralFinalAssessment.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
//           //     <Page pageNumber={pageNumber} />
//           //   </Document>
//           // </div>
//         );
//         break;
//       case 'AssessmentEvaluation1.2':
//         setSelectedComponent(); // Assuming AssessmentEvaluation is a valid component
//         break;
//       default:
//         setSelectedComponent(null);
//         break;
//     }
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-sm navbar-default navbar-fixed-top">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <div className='logo'>
//               <img src={logo} alt="Logo" style={{ width: 100, height: 25 }} className="rounded-pill" />
//             </div>
//           </a>
//         </div>
//       </nav>
//       <div className='d-flex'>
//         <div className='side'>
//         <ul className="tree" style={{ width: 250 }}>
//       {folders.map((folder, folderIndex) => (
//         <li key={folderIndex} className={`folder ${folder.isOpen ? 'open' : ''}`} onClick={() => toggleFolder(folderIndex)}>
//           {folder.isOpen ? '-' : '+'}{folder.name}
//           {folder.isOpen && (
//             <ul>
//               {folder.files?.map((file, fileIndex) => (
//                 <li key={fileIndex} className="file" onClick={() => handleFileClick(file)}>
//                   {file}
//                 </li>
//               ))}
//               {folder.topics?.map((topic, topicIndex) => (
//                 <li key={topicIndex} className={`folder ${topic.isOpen ? 'open' : ''}`} onClick={(e) => {e.stopPropagation(); toggleTopic(folderIndex, topicIndex);}}>
//                   {topic.isOpen ? '-' : '+'}{topic.name}
//                   {topic.isOpen && (
//                     <ul>
//                       {topic.files.map((file, fileIndex) => (
//                         <li key={fileIndex} className="file" onClick={() => handleFileClick(file)}>
//                           {file}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//         </div>
//         {selectedComponent}
//       </div>
//     </div>
//   );
// }

// export default Mycourse;

// final review

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Navbarone.css";
// import logo from '../Images/logo.png';
import logo from "../../../src/Images/logo.png";

import { Document, Page } from "react-pdf";
import { useSelector } from "react-redux";

import { Link, Route } from "react-router-dom";
import PDFViewer from "../PDF/PDFViewer";
import { type } from "@testing-library/user-event/dist/type";

function Mycourse() {
  const selectedCourse = useSelector((state) => state.enroll.selectedCourse);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const viewcourse = useSelector((state) => state.enroll.course[0]);

  const pdf = useSelector((state) => state.fetchPdf.material);
 useEffect(()=>{
  console.log(selectedCourse);
 },[])
  const [folders, setFolders] = useState([
    {
      name: selectedCourse ? selectedCourse.enrolledCoursename : "Loading...",
      isOpen: false,
      topics:
        selectedCourse && selectedCourse.topics
          ? selectedCourse.topics.map((topic) => ({
              name: topic.topicName,
              isOpen: false,
              
                materials: topic.materials? topic.materials.map((material)=>(
                  {
                    materialId:material.materialId,
                    materialname:material.materialName,
                    materiallink:material.material,
                    materialType:material.materialType
                  }
                )):<>loading...</>

            }))
          : [],
    },
  ]);
  useEffect(()=>{
    console.log(folders);
  },[])

  const [selectedComponent, setSelectedComponent] = useState(null);

  const toggleFolder = (index) => {
    const updatedFolders = [...folders];
    updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
    setFolders(updatedFolders);
  };

  const toggleTopic = (folderIndex, topicIndex, e) => {
    e.stopPropagation();
    const updatedFolders = [...folders];
    if (updatedFolders[folderIndex].topics[topicIndex].isOpen) {
      updatedFolders[folderIndex].topics[topicIndex].isOpen = false;
    } else {

      updatedFolders[folderIndex].topics.forEach((topic) => {
        topic.isOpen = false;
      });
      updatedFolders[folderIndex].topics[topicIndex].isOpen = true;
    }
    setFolders(updatedFolders);
  };
  const toggleType = (folderIndex, topicIndex, typeIndex, e) => {
    e.stopPropagation();
    console.log("oo")
    const updatedFolders = [...folders];
    
    if (updatedFolders[folderIndex].topics[topicIndex].materialType[typeIndex].isOpen) {
        updatedFolders[folderIndex].topics[topicIndex].materialType[typeIndex].isOpen = false;
    } else {
        updatedFolders[folderIndex].topics[topicIndex].materialType.forEach((type) => {
            type.isOpen = false;
        });
        updatedFolders[folderIndex].topics[topicIndex].materialType[typeIndex].isOpen = true;
    }
    
    setFolders(updatedFolders);
};
   const navigate = useNavigate();
  const handleFileClick = (file) => {
    switch (file) {
      case "PPT":
        // console.log("ppt")
        // Set the component for PPT
        break;
      case "PDF":
        setSelectedComponent(<PDFViewer Document={"d"}/>);

        // setSelectedComponent( <a href="">{pdf.length > 0 && pdf[0].name}</a>);

        // navigate('/PDF');
        // setSelectedComponent(
        //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        //     {/* navigate('/PDF'); */}
        //     {/* <Route file={'/PDF'} onLoadSuccess={onDocumentLoadSuccess}>
        //       <Page pageNumber={pageNumber} />
        //     </Route> */}
        //   </div>
        // );
        break;
      case "AssessmentEvaluation1.2":
        // Set the component for AssessmentEvaluation1.2
        break;
      default:
        setSelectedComponent(null);
        break;
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
 const opencontent=(type,materiallink)=>{
 console.log("io"+type)
 console.log("link"+materiallink)
 switch (type) {
  case "PPT":
    // console.log("ppt")
    // Set the component for PPT
    break;
  case "PDF":
    setSelectedComponent(<PDFViewer material={materiallink}/>);

    // setSelectedComponent( <a href="">{pdf.length > 0 && pdf[0].name}</a>);

    // navigate('/PDF');
    // setSelectedComponent(
    //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    //     {/* navigate('/PDF'); */}
    //     {/* <Route file={'/PDF'} onLoadSuccess={onDocumentLoadSuccess}>
    //       <Page pageNumber={pageNumber} />
    //     </Route> */}
    //   </div>
    // );
    break;
  
  default:
    setSelectedComponent(null);
    break;
  }
 }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img
                src={logo}
                alt="Logo"
                style={{ width: 100, height: 25 }}
                className="rounded-pill"
              />
            </div>
          </a>
          {/* <button type="button" class="btn btn-primary">Back</button> */}

          <Link className="btn btn-primary" to={`/Enrollmy`}>
            Back
          </Link>
        </div>
      </nav>
      <div className="d-flex">
      <div className="side">
    <ul className="tree" style={{ width: 250 }}>
        {folders.map((folder, folderIndex) => (
            <li key={folderIndex} className={`folder ${folder.isOpen ? "open" : ""}`} onClick={() => toggleFolder(folderIndex)}>
{folder.isOpen ? "-" : "+"} {folder.name}
                {folder.isOpen && (
                    <ul>
                        {folder.topics?.map((topic, topicIndex) => (
                            <li key={topicIndex} className={`folder ${topic.isOpen ? "open" : ""}`} onClick={(e) => toggleTopic(folderIndex, topicIndex, e)}>
{topic.isOpen ? "-" : "+"} {topic.name}
                                {topic.isOpen && (
                                    <ul type="none">
                                        
                                                        {topic.materials.map((content, contentIndex) => (
                                                            <li key={contentIndex} className="file" onClick={(e)=>{opencontent(content.materialType,content.materiallink)}}>
                                                                {content.materialname}
                                                            </li>
                                                        ))}
                                                 
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
</div>
        <div className="content">
          {selectedComponent}
          {/* <a href="">{pdf.length > 0 && pdf[0].name}</a> */}
        </div>

        {/* <div class="scroll" style={{width:10000}}>

            <PDFViewer/>                  
        </div> */}
        <div></div>

        <a href="">{pdf.length > 0 && pdf[0].name}</a>
      </div>
    </div>
  );
}

export default Mycourse;
















// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../Styles/Navbarone.css";
// import logo from "../../../src/Images/logo.png";

// import { Document, Page } from "react-pdf";
// import { useSelector } from "react-redux";

// import { Link, Route } from "react-router-dom";
// import PDFViewer from "../PDF/PDFViewer";

// function Mycourse() {
//   const selectedCourse = useSelector((state) => state.enroll.selectedCourse);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const viewcourse = useSelector((state) => state.enroll.course[0]);

//   const pdf = useSelector((state) => state.fetchPdf.material);

//   const [folders, setFolders] = useState([
//     {
//       name: selectedCourse ? selectedCourse.enrolledCoursename : "Loading...",
//       isOpen: false,
//       topics:
//         selectedCourse && selectedCourse.topics
//           ? selectedCourse.topics.map((topic) => ({
//               name: topic.topicName,
//               isOpen: false,
//               files: ["PPT", "PDF", "TEXT", "VIDEO", "AUDIO"],
//             }))
//           : [],
//     },
//   ]);

//   const [selectedComponent, setSelectedComponent] = useState(null);

//   const [selectedPdf, setSelectedPdf] = useState(null);


//   const toggleFolder = (index) => {
//     const updatedFolders = [...folders];
//     updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
//     setFolders(updatedFolders);
//   };

//   const toggleTopic = (folderIndex, topicIndex, e) => {
//     e.stopPropagation();
//     const updatedFolders = [...folders];
//     if (updatedFolders[folderIndex].topics[topicIndex].isOpen) {
//       updatedFolders[folderIndex].topics[topicIndex].isOpen = false;
//     } else {
//       updatedFolders[folderIndex].topics.forEach((topic) => {
//         topic.isOpen = false;
//       });
//       updatedFolders[folderIndex].topics[topicIndex].isOpen = true;
//     }
//     setFolders(updatedFolders);
//   };
//   const navigate = useNavigate();
//   const handleFileClick = (file) => {
//     switch (file) {
//       case "PPT":
//         // Set the component for PPT
//         break;
//       case "PDF":
//         setSelectedComponent(null);
//         setSelectedPdf(<a href="">{pdf.length > 0 && pdf[0].name}</a>);
        
//         break;
//       case "AssessmentEvaluation1.2":
//         // Set the component for AssessmentEvaluation1.2
//         break;
//       default:
//         setSelectedComponent(null);
//         setSelectedPdf(null);
//         break;
//     }
//   };

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }


//   const handlePdfNameClick = () => {
//     setSelectedComponent(<PDFViewer pdf={pdf} />);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-sm navbar-default navbar-fixed-top">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <div className="logo">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{ width: 100, height: 25 }}
//                 className="rounded-pill"
//               />
//             </div>
//           </a>
//           <Link className="btn btn-primary" to={`/Enrollmy`}>
//             Back
//           </Link>
//         </div>
//       </nav>
//       <div className="d-flex">
//         <div className="side">
//           <ul className="tree" style={{ width: 150 }}>
//             {folders.map((folder, folderIndex) => (
//               <li
//                 key={folderIndex}
//                 className={`folder ${folder.isOpen ? "open" : ""}`}
//                 onClick={() => toggleFolder(folderIndex)}
//               >
//                 {folder.isOpen ? "-" : "+"}
//                 {folder.name}
//                 {folder.isOpen && (
//                   <ul>
//                     {folder.topics?.map((topic, topicIndex) => (
//                       <li
//                         key={topicIndex}
//                         className={`folder ${topic.isOpen ? "open" : ""}`}
//                         onClick={(e) => toggleTopic(folderIndex, topicIndex, e)}
//                       >
//                         {topic.isOpen ? "-" : "+"}
//                         {topic.name}
//                         {topic.isOpen && (
//                           <ul>
//                             {topic.files.map((file, fileIndex) => (
//                               <li
//                                 key={fileIndex}
//                                 className="file"
//                                 onClick={() => handleFileClick(file)}
//                               >
//                                 {file}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="content">
//         <a href="#" onClick={handlePdfNameClick}>{selectedPdf}</a>
        
//           {selectedComponent}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mycourse;


