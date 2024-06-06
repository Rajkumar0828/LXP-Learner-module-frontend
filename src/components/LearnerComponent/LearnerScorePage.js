import React, { useEffect, useState } from "react";
import { TopicScoreApi } from "../../middleware/LearnerMiddleware/TopicScoreApi";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LearnerNavbar from "..//LearnerComponent/LearnerNavbar";

function TopicScore() {
  const [TopicId] = useState("1245a748-8c5e-498b-bfb4-3770073962a7");
  const [LearnerId] = useState("59967109-5c00-4131-b19e-d655b35fed55");
  const [ViewScoresList, setViewScoresList] = useState([]);


  useEffect(() => {
    scoreFetch(LearnerId, TopicId);
    // PassorFail(Score, Passmark);
  }, []);

  const scoreFetch = async (LearnerId, TopicId) => {
    try {
      const ScoreDataArray = await TopicScoreApi(LearnerId, TopicId);
      console.log(
        "ScoreDataArray",
        ScoreDataArray[0].score,
        ScoreDataArray[0].passMark
      );
      setViewScoresList(ScoreDataArray);
    } catch (error) {
      console.error("error in fetch", error);
    }
  };

  const PassorFail = async (Score, Passmark) => {
    if (Score >= Passmark) {
      // setPassorFail("Pass");
    }
  };

  return (
    <>
      <LearnerNavbar />
      <div className="mt-5">
        <div className="container">
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Course Name</TableCell>
                  <TableCell>Topic Name</TableCell>
                  <TableCell>Score</TableCell>

                  <TableCell>Completion Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ViewScoresList.map((scoreItem, index) => (
                  <Row key={index} row={scoreItem} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [Passmark, setPassmark] = useState();
  const [Score, setScore] = useState();
  const [Passorfail, setPassorFail] = useState("Fail");

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.courseTitle}</TableCell>
        <TableCell>{row.topicName}</TableCell>
        <TableCell>{row.score}</TableCell>
        <TableCell>{Passorfail}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          {/* Your collapsible content here */}
        </TableCell>
      </TableRow>
    </>
  );
}

export default TopicScore;
