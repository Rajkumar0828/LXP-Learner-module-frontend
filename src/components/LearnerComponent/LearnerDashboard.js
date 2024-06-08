import LearnerNavbar from '../LearnerComponent/LearnerNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCoursesRequest } from '../../actions/LearnerAction/LearnerGetCourseAction';
import { enrollRequest } from '../../actions/LearnerAction/LearnerPostEnrollAction';
import '../../Styles/Learner/LearnerCourse.css';
import { FetchuserDataRequest } from '../../actions/LearnerAction/FetchRegisterAction';
import '../../Styles/Learner/LearnerDashboard.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import { indigo } from '@mui/material/colors';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import LineChart from './LearnerLineChart';
import LinearProgress from '@mui/material/LinearProgress';


const LearnerDashboard = ({ enrolledCourses, loading, error, search }) => {
  const courses = useSelector((state) => state.fetchcourse.courses);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const selectedStream = useSelector((state) => state.fetchlearner.userData.stream);
  const [profilePic, setProfilePic] = useState("https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg");
  const [progress,setProgress]=useState(60);
  const learnerId = sessionStorage.getItem('UserSessionID'); // Retrieve learner ID from session storage

  useEffect(() => {
    dispatch(fetchCoursesRequest(learnerId));
    fetchuser(learnerId);
  }, [dispatch]);

  useEffect(() => {
    if (selectedStream) {
      const streams = selectedStream.split(', ');
      setFilteredCourses(courses.filter(course => streams.map(stream => stream.toLowerCase()).includes(course.title.toLowerCase())));
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedStream, courses]);

  const fetchuser = async (learnerId) => {
    dispatch(FetchuserDataRequest(learnerId));
  };

  const [open, setOpen] = useState(false);

  const handleOpen = (course) => {
    setOpen(true);
    setSelectedCourse(course);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnrollCourse = (courseId) => {
    const maxCourses = 3;
    const learnerCourses = enrolledCourses.filter(course => course.learnerId === learnerId);

    if (learnerCourses.length >= maxCourses) {
      alert('You have reached the course enrollment limit!');
      return;
    }

    const alreadyEnrolled = enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);

    if (alreadyEnrolled) {
      alert('You have already enrolled in this course!');
      return;
    }

    dispatch(enrollRequest(courseId, learnerId));
  };

  const isEnrolled = (courseId) => {
    if (!Array.isArray(enrolledCourses)) {
      console.error("enrolledCourses is not an array", enrolledCourses);
      return false;
    }
    return enrolledCourses.some(course => course.courseId === courseId && course.learnerId === learnerId);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [3, 2, 2, 6, 7, 4, 5, 6, 7, 8, 9, 10], // Dummy data, replace with real data as needed
  };

  return (
    <div>
      <LearnerNavbar />
      <div className="container-fluid ">
        <div className=" d-flex allcont">
          <div className=" justify-content-center ">
            <div className="card profile-card"  >
              {/* <div className="position-relative"> */}
              <img src={profilePic} className="card-img-top rounded-circle mt-3 mx-auto" alt="Profile" style={{ width: '150px', height: '150px' }} />
              <input
                type="file"
                accept="image/*"
                id="profile-pic-upload"
                style={{ display: 'none' }}
                onChange={handleProfilePicChange}
              />
              {/* <IconButton
                  aria-label="upload picture"
                  component="span"
                  className="position-absolute camera"
                  style={{ top: '50%', left: '55%' }}
                  onClick={() => document.getElementById('profile-pic-upload').click()}
                >
                  <CameraAltIcon />
                </IconButton> */}

            </div>


            {/* </div> */}
          </div>
          <div className='all-card'>
            <Card className='count-card' sx={{ backgroundColor: ' #f0f0f0' }}>
              <Typography component="div" variant="h6" className='count-name' >
                Enrolled Course
              </Typography>

              {/* <CardMedia className='count-card'> */}
              <div className='count-inside '>
                <IconButton className='count-icons' sx={{ marginBottom: 10 }}>
                  <SchoolRoundedIcon sx={{ color: indigo[900], fontSize: 40 }} >

                  </SchoolRoundedIcon>
                </IconButton>
              </div>
            </Card>
          </div>
          <div className=' '>
            <Card className='count-card' sx={{ backgroundColor: ' #f0f0f0' }}>
              <Typography component="div" variant="h6" className='count-name' >
                InProgress Course
              </Typography>

              {/* <CardMedia className='count-card'> */}
              <div className='count-inside'>
                <IconButton className='count-icons' sx={{ marginBottom: 10 }}>
                  <DownloadingRoundedIcon sx={{ color: indigo[900], fontSize: 40 }} >

                  </DownloadingRoundedIcon>
                </IconButton>
              </div>
            </Card>
          </div>
          <div className=' '>
            <Card className='count-card' sx={{ backgroundColor: ' #f0f0f0' }}>
              <Typography component="div" variant="h6" className='count-name' >
                Completed Course
              </Typography>

              {/* <CardMedia className='count-card'> */}
              <div className='count-inside'>
                <IconButton className='count-icons' sx={{ marginBottom: 10 }}>
                  <MilitaryTechRoundedIcon sx={{ color: indigo[900], fontSize: 40 }} >

                  </MilitaryTechRoundedIcon>
                </IconButton>
              </div>
            </Card>
          </div>
           <div className='chart-container' >
          <h3 className='count-recommend'>Score Progress</h3>
          <LineChart chartData={chartData} />

        </div>
        </div>

        <div className=' d-flex'>
          {/* <div className="col-md-7"> */}

          {filteredCourses.map((course, index) => (
            <div className="" key={index}>
              <h3 className='count-recommend'>Recommended Courses</h3>
              <Card className='course-card'>
                <CardMedia
                  className='course-inside'
                  component="img"
                  sx={{ width: 150 }}
                  image={course.thumbnailimage}
                  alt={course.title}
                />
                {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}> */}
                <CardContent className='course-content' sx={{backgroundColor:'#f0f0f0'}}>
                  <div className='course-typo'>
                  <Typography component="div" variant="h5" className='course-name'>
                    Course: {course.title}
                  </Typography>
                  <Typography variant="h6" component="div" className='course-name'>
                    Level: {course.level}
                  </Typography>
                  <Typography variant="subtitle" component="div" className='course-name'>
                    Category: {course.catagory}
                  </Typography>
                  <Button onClick={() => handleOpen(course)}>View More</Button>
                  </div>
                </CardContent>
                {/* </Box> */}
              </Card>
              <Modal
                open={open && selectedCourse && selectedCourse.courseId === course.courseId}
                onClose={handleClose}
                aria-labelledby="course-modal-title"
                aria-describedby="course-modal-description"
              >
                <Box sx={style}>
                  <Typography id="course-modal-title" variant="h6" component="h2">{course.title}</Typography>
                  <Typography id="course-modal-description" variant="body1" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button onClick={handleClose}>Close</Button>
                    <button
                      className="btn btn-lg"
                      onClick={() => handleEnrollCourse(course.courseId)}
                      disabled={course.enrollStatus} // Disable if already enrolled
                    >
                      {course.enrollStatus ? 'Enrolled' : 'Enroll'}
                    </button>
                  </Stack>
                </Box>
              </Modal>
            </div>
          ))}
          
          <div className=''>
          <h3 className='count-recommend'>Ongoing Courses</h3>

            <Card className='course-card' sx={{ backgroundColor: ' #f0f0f0' }}>
             

              {/* <CardMedia className='count-card'> */}
              <div className='course-inside'>
                <IconButton className='count-icons' sx={{ marginBottom: 10 }}>
                
                </IconButton>
               
              </div>
              <CardContent className='course-content'>
              <Typography component="div" variant="h5" >
                    Course:
                  </Typography>
                  <Typography variant="h6" component="div" >
                    Level: 
                  </Typography>
                  <LinearProgress variant='determinate' value={progress} sx={{height: 10,borderRadius: 5, marginTop:1 }}>
                    <Typography variant='body2' component="div" sx={{marginTop:1}}>
                      {progress}%

                    </Typography>

                  </LinearProgress>
                  </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>

  );
};

const mapStateToProps = (state) => ({
  enrolledCourses: state.enrolledCourses.enrolledCourses || [], // Ensure it's an array
  loading: state.enrolledCourses.loading,
  error: state.enrolledCourses.error,
});

export default connect(mapStateToProps)(LearnerDashboard);