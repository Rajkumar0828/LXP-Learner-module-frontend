// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// const EnrollmentCard = () => {
//   const [enrollmentData, setEnrollmentData] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5199/lxp/enroll/10784ba7-c7d2-41b9-892b-8c0753b5951a/course/topic`)
//       .then(response => response.json())
//       .then(data =>{
//         console.log(data);
//         setEnrollmentData(data)})
//       .catch(error => console.error('Error:', error));
//   },[] );

//   return (
//     enrollmentData && (
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="h2">
//             {enrollmentData.enrolledCoursename}
//           </Typography>
//           <Typography color="textSecondary">
//             {enrollmentData.enrolledcoursedescription}
//           </Typography>
//           <Typography color="textSecondary">
//             {enrollmentData.enrolledcoursecategory}
//           </Typography>
//           <Typography color="textSecondary">
//             {enrollmentData.enrolledcourselevels}
//           </Typography>
//           <img src={enrollmentData.Thumbnailimage} alt="Course Thumbnail" />
//         </CardContent>
//       </Card>
//     )
//   );
// };

// export default EnrollmentCard;

// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import '../Styles/Enrollment.css'
// import { UseDispatch,useDispatch,useSelector } from 'react-redux';
// import { fetchenrollCourse } from '../Action/EnrolledCourseAction';
// import { Link } from 'react-router-dom';

// const EnrollmentCard = () => {
//     const dispatch=useDispatch();
//   const [enrollmentData, setEnrollmentData] = useState(null);
//     const id='1d513fda-da0c-4673-9552-07114d416fe3';
//     const viewcourse=useSelector((state)=>state.enroll.course[0])
//     console.log(viewcourse)

//   useEffect(() => {
//     // fetch(`http://localhost:5199/lxp/enroll/1d513fda-da0c-4673-9552-07114d416fe3/course/topic`)
//     //   .then(response => response.json())
//     //   .then(data => setEnrollmentData(data.data[0])) // Access the first element of the data array
//     //   .catch(error => console.error('Error:', error));
//     dispatch(fetchenrollCourse(id))

//   }, []);

//   return (
//     viewcourse && (
//         <>
//        <Link id="Card" to="/mycourse">
//       <Card id="Card" >
//         <CardContent id="cardcontent">
//         <img id="thumbnail" src={viewcourse[0].thumbnailimage} alt="Course Thumbnail" />
//         <div id="coursedetails">
//           <Typography variant="h5" component="h2">
//             {viewcourse[0].enrolledCoursename}
//           </Typography>
//           <Typography color="textSecondary">
//             {viewcourse[0].enrolledcoursedescription}
//           </Typography>
//           <Typography color="textSecondary">
//             {viewcourse[0].enrolledcoursecategory}
//           </Typography>
//           <Typography color="textSecondary">
//             {viewcourse[0].enrolledcourselevels}
//           </Typography>
//           </div>
//         </CardContent>
//       </Card>
//       </Link>
//       </>
//     )
//   );
// };

// export default EnrollmentCard;

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// // import "../../Styles/Enrollment.css"
// import { useDispatch, useSelector } from 'react-redux';
// //import { fetchenrollCourse, selectCourse } from '../Action/EnrolledCourseAction';
// import { fetchenrollCourse, selectCourse } from '../../actions/EnrolledCourseAction';
// import { Link } from 'react-router-dom';

// const EnrollmentCard = () => {
//     const dispatch = useDispatch();
//     const id='2ce7b837-ec9b-40d2-aa76-567319c8fc02'; // The specific learnerId
//     const viewcourse = useSelector((state) => state.enroll.enrolledCourses)

//     useEffect(() => {
//         dispatch(fetchenrollCourse(id))
//         console.log(viewcourse);
//     }, [dispatch]);

//   const navigate=useNavigate();

//   const handleNavigation = (course) => (e) => {
//     e.preventDefault();
//     console.log("course name",course.enrolledCoursename);

//     dispatch(selectCourse(course));  // Dispatch the selectCourse action with the selected course
//     navigate(`/MyCourse/${course.enrolledCourseId}`);
//     console.log("course name",course.enrolledCoursename);
// }

//     return (
//         viewcourse && viewcourse.map((course, index) => (
//             <Link key={index} id="Card" >
//                 <Card id="Card" onClick={handleNavigation(course)} >
//                     <CardContent id="cardcontent">
//                         <img id="thumbnail" src={course.thumbnailimage} alt="Course Thumbnail" />
//                         <div id="coursedetails">
//                             <Typography variant="h5" component="h2">
//                                 {course.enrolledCoursename}
//                             </Typography>
//                             <Typography color="textSecondary">
//                                 {course.enrolledcoursedescription}
//                             </Typography>
//                             <Typography color="textSecondary">
//                                 {course.enrolledcoursecategory}
//                             </Typography>
//                             <Typography color="textSecondary">
//                                 {course.enrolledcourselevels}
//                             </Typography>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </Link>
//         ))
//     );
// };

// export default EnrollmentCard;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../Styles/Enrollment.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchenrollCourse,
  selectCourse,
} from "../../actions/EnrolledCourseAction";
import { Link } from "react-router-dom";
import { Navbar, Row } from "react-bootstrap";
import  logo from'../../../src/Images/logo.png'



// import Navbar1 from "../LearnerComponent/Navbar1";

const EnrollmentCard = () => {
  const dispatch = useDispatch();
  const id = "7e9d8a7d-5c5e-4851-9bff-6120867d667b"; // The specific learnerId
  const viewcourse = useSelector((state) => state.enroll.course[0]);

  useEffect(() => {
    dispatch(fetchenrollCourse(id));
  }, [dispatch]);

  const navigate = useNavigate();

  const handleNavigation = (course) => (e) => {
    e.preventDefault();
    console.log(course.enrolledCourseId);
    dispatch(selectCourse(course)); // Dispatch the selectCourse action with the selected course
    navigate(`/mycourse`);
  };

  return (
    <>

    <div>
     
  
    <nav className="navbar navbar-expand-sm navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className='logo'>
              <img src={logo} alt="Logo" style={{ width: 100, height: 25 }} className="rounded-pill" />
            </div>
          </a>
          {/* <button type="button" class="btn btn-primary">Back</button> */}

          <Link className="btn btn-primary" to={`/Enrollmy`}>Back</Link>
        </div>
      </nav>
      <h3>Enrolled Courses:</h3>

    </div>
      <div className="box">
        {viewcourse && viewcourse.map((course, index) => (
        <Link key={index} id="Card">
          <Card
            style={{ height:'300px'}}
            id="Card"
            onClick={handleNavigation(course)}
          >
            <CardContent id="cardcontent">
              <img
                id="thumbnail"
                src={course.thumbnailimage}
                alt="Course Thumbnail"
                height={150}
                width={100}
              />
              <div id="coursedetails">
                <Typography variant="h5" component="h2">
                  {course.enrolledCoursename}
                </Typography>
                {/* <Typography color="textSecondary">
                                {course.enrolledcoursedescription}
                            </Typography>
                            <Typography color="textSecondary">
                                {course.enrolledcoursecategory}
                            </Typography> */}
                <Typography color="textSecondary">
                  {course.enrolledcourselevels}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Link>
        ))
                        }
      </div>
    </>
  );
};

export default EnrollmentCard;
