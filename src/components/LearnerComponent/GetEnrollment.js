import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../Styles/Learner/GetEnrollment.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchenrollCourse,
  selectCourse,
} from "../../actions/LearnerAction/EnrolledCourseAction";
import { Link } from "react-router-dom";
import { Navbar, Row } from "react-bootstrap";
import  logo from'../../../src/Images/logo.png'





// import Navbar1 from "../LearnerComponent/Navbar1";

const GetEnrollment = () => {
    const dispatch = useDispatch();
    const id = "85e5a718-57ff-44e0-9eec-6c014668f419"; // The specific learnerId
    const viewcourse = useSelector((state) => state.enroll.course[0]);
  
    useEffect(() => {
      dispatch(fetchenrollCourse(id));
    }, [dispatch]);
  
    const navigate = useNavigate();
  
    const handleNavigation = (course) => (e) => {
      e.preventDefault();
      console.log(course.enrolledCourseId);
      dispatch(selectCourse(course)); // Dispatch the selectCourse action with the selected course
      navigate(`/ViewTopics`);
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
  
            <Link className="btn btn-primary" to={`/LearnerenrolledCourse`}>Back</Link>
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
  
  export default GetEnrollment;