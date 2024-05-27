import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Register from '../src/components/LearnerComponent/Register';
import Navbar from "..//src/components/LearnerComponent/Navbar";
import NavbarView from "./View/NavbarView";
import Navbar1 from './components/LearnerComponent/Navbar1';
import Course from "./components/LearnerComponent/Course";
// import Rajcourse from "./components/LearnerComponent/MyCourseFinal";
import RegisterView from "./View/RegisterView";

import UpdateUserProfileView from "./View/UpdateUserProfileView";
import PasswordChange from "./components/PasswordChange";
import ProfileController from "./components/LearnerComponent/ProfileController";
import MyCoursesView from "./View/MyCoursesView";
import { Provider } from "react-redux";
import Store from "./store/fetchPdfStore";
import PdfViewerComponent from "./components/PDF/Pptxday";

import Moye from "./components/PDF/moye";
// import MyCoursesNavbar from "./components/LearnerComponent/Mycoursefinalnavbar";
import PDFViewer from "./components/PDF/PDFViewer";
import Rfetch from "./components/PDF/reactPDF";
import Appu from "./components/PDF/Third";
import PDFViewerPriya from "./components/PDF/PriyaPDF";
import DownloadPPTX from "./components/PDF/pptx";
import EnrollmentCard from "./components/LearnerComponent/Enrollment";
import Mycourse from "./components/LearnerComponent/Mycourse";
import Iframe from "./components/PDF/Iframe";
import { RouteRounded } from "@mui/icons-material";
import Crewone from "./components/PDF/Iframe";
import PowerPointViewer from "./components/PPTX/Chatone";
import PowerPointViewerone from "./components/PPTX/PPTXJS";
import IFramedoc from "./components/DOCS/IFrame";



function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<RegisterView />} />
          <Route
            path="/UpdateUserProfile"
            element={<UpdateUserProfileView />}
          />
          <Route path="/PasswordChange" element={<PasswordChange />} />
          <Route path="/ProfileController" element={<ProfileController />} />

          <Route path="/Navbar" element={<NavbarView />} />
          {/* <Route path="/Myenroledcourse" element={<NavbarViewone />} /> */}
          <Route path="/Course" element={<Course />} />
          {/* <Route path="/Rajcourse" element={<Rajcourse />} /> */}
          {/* <Route path="/mycourse" element={<MyCoursesView />}></Route> */}
          {/* <Route path="/Sidenavbar" element={<Sidecourse/>}></Route> */}
          {/* <Route path="/Finalnavbar" element={MyCoursesNavbar}></Route> */}
          {/* <Route path="/PDFViewer" element={<PDFViewer/>}></Route> */}
          <Route path='/Navbar1' element={<Navbar1/>}></Route>
         <Route path='/PDF' element={<PDFViewer/>}></Route>
          {/* <Route path="Moyee" element={<Moye/>}></Route> */}
          {/* <Route path="inte" element={<MyCoursesNavbar/>}></Route> */}
          <Route path="/Moyee" element={<Moye/>}></Route>   //Working well for public path
          <Route path="/onelove" element={<Rfetch/>}></Route>
          <Route path="/Appu" element={<Appu/>}></Route>
          <Route path="/Priya" element={<PDFViewerPriya/>}></Route>
          <Route path="pptx" element={<DownloadPPTX/>}></Route>
          <Route path="Enrollmy" element={<EnrollmentCard/>}></Route>
          <Route path="mycourse" element={<Mycourse/>}></Route>
          {/* <Route path="Iframe" element={<Iframe/>}></Route> */}
          <Route path="pptxday" element={<PdfViewerComponent document={'http://localhost:5199/wwwroot/CourseMaterial/5396bef1-3bba-457e-8a64-74cef1444733_Relevantz Template1.pptx'}/>}></Route>  //working but required a key
          <Route path="crew" element={<Crewone/>}></Route>  //Not working
          
        
         <Route path="Chatone" element={<PowerPointViewer filePath="http://localhost:5199/wwwroot/CourseMaterial/5396bef1-3bba-457e-8a64-74cef1444733_Relevantz Template1.pptx"/>}></Route> //Not working 
         <Route path="Chatone" element={<PowerPointViewer fileUrl="http://localhost:5199/wwwroot/CourseMaterial/5396bef1-3bba-457e-8a64-74cef1444733_Relevantz Template1.pptx"/>}></Route> //Working foe public path
        <Route path="PPTX" element={<PowerPointViewerone filePath="http://localhost:5199/wwwroot/CourseMaterial/5396bef1-3bba-457e-8a64-74cef1444733_Relevantz Template1.pptx"/>}></Route>
           <Route path="docI" element={<IFramedoc/>}></Route>
          
        </Routes>
      </Provider>
    </div>
  );
}

export default App;


//Myenroledcourse