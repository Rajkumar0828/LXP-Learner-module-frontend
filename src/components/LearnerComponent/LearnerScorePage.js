import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LearnerNavbar from '..//..///.//components/LearnerComponent/LearnerNavbar';
import { useEffect } from 'react';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton> */}
            {row.course}
          </div>
        </TableCell>
        <TableCell align="right">{row.topics}</TableCell>
        <TableCell align="right">{row.scores}</TableCell>
        <TableCell align="right">{row.completionStatus}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Chemistry</TableCell>
                    <TableCell>Reaction</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Total ammount($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    course: PropTypes.string.isRequired,
    topics: PropTypes.string.isRequired,
    scores: PropTypes.string.isRequired,
    completionStatus: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function LearnerScorePage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from backend API here
    // Example:
    // fetch('backend_url')
    //   .then(response => response.json())
    //   .then(data => setRows(data))
    //   .catch(error => console.error('Error fetching data:', error));
    
    // Mock data for demonstration
    const mockData = [
      { course: 'Mathematics', topics: 'Algebra, Calculus', scores: 'A, B', completionStatus: 'Completed', history: [] },
      { course: 'Physics', topics: 'Mechanics, Thermodynamics', scores: 'A, A', completionStatus: 'In Progress', history: [] },
      { course: 'Biology', topics: 'Genetics, Ecology', scores: 'B, C', completionStatus: 'Not Started', history: [] },
      { course: 'Chemistry', topics: 'Organic, Inorganic', scores: 'A, A', completionStatus: 'Completed', history: [] }
    ];

    setRows(mockData);
  }, []);

  return (
    <>
      <LearnerNavbar />
      <div className='container'>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Course</TableCell>
                <TableCell align="right">Topics</TableCell>
                <TableCell align="right">Scores</TableCell>
                <TableCell align="right">Completion Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}