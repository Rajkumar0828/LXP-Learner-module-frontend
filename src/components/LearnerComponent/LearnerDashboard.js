import LearnerNavbar from '../LearnerComponent/LearnerNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';


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





export default function Dashboard() {


    // const darkTheme = createTheme({
    //     palette: {
    //         mode: 'dark',
    //     },
    // });

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <LearnerNavbar />
            <Card sx={{ display: 'flex', width:600, marginLeft:30 }} className='course-card'>
                <CardMedia
                    className='course-card'
                    component="img"
                    sx={{ width: 100 }}
                    image="/static/images/cards/live-from-space.jpg" // Replace with course thumbnail
                    alt="Course thumbnail"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Course Title
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Course Author
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            Short description of the course...
                        </Typography>
                        <Button onClick={handleOpen}>View More</Button>
                    </CardContent>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="course-modal-title"
                    aria-describedby="course-modal-description"
                >
                    <Box sx={{ ...style }}>
                        <h2 id="course-modal-title">Full Course Description</h2>
                        <p id="course-modal-description">
                            Full description of the course...
                        </p>
                        <Stack direction="row" spacing={2}>
                            <Button onClick={handleClose}>Close</Button>
                            <Button variant="contained" onClick={() => alert('Enrolled successfully!!')}>
                                Enroll
                            </Button>
                        </Stack>
                    </Box>
                </Modal>
            </Card>
        </div>

    )
}

