// import React, { useEffect, useState } from 'react'
// import { TopicScoreApi } from '../../middleware/LearnerMiddleware/TopicScoreApi';
 
// function TopicScore() {
 
//   const [TopicId] = useState('1245a748-8c5e-498b-bfb4-3770073962a7');
//   const [LearnerId] = useState('59967109-5c00-4131-b19e-d655b35fed55');
// //  const [LearnerId]= useState(sessionStorage.getItem('UserSessionID'));
//  console.log("hello session", LearnerId);
 
//   const [ViewScore, setScore] = useState({score:0});
//   useEffect(() => {
//     scoreFetch(LearnerId, TopicId);
//   }, []);
 
 
//   const scoreFetch = async () => {
//     try {
//       const ScoreData = await TopicScoreApi(LearnerId, TopicId);
//       setScore(ScoreData[0]);
//       // console.log(ViewScore);4
//       console.log('scoredata',ScoreData)
     
//       // return ScoreData;
     
//     }
//     catch (error) {
//       console.error('error in fetch', error);
//     }
//   };
 
 
 
 
 
//   return (
//     <>
//       <div className='mt-5'>
//         <div className='container d-flex justify-content-center'>
//           <h1> view topic score </h1>
//           <h1>{ViewScore.score}</h1>
//         <label>course Name</label>  <h1>{ViewScore.courseTitle}</h1>
//       <label>Topic Name</label>    <h1>{ViewScore.topicName}</h1>
         
 
 
 
 
 
//         </div>
//       </div>
 
 
 
//     </>
//   )
// }
 
// export default TopicScore;
 
 
 
import React, { useEffect, useState } from 'react';
import { TopicScoreApi } from '../../middleware/LearnerMiddleware/TopicScoreApi';

function TopicScore() {

  const [TopicId] = useState('1245a748-8c5e-498b-bfb4-3770073962a7');
  const [LearnerId] = useState('59967109-5c00-4131-b19e-d655b35fed55');
  // const [LearnerId]= useState(sessionStorage.getItem('UserSessionID'));
  console.log("hello session", LearnerId);

  const [ViewScoresList, setViewScoresList] = useState([]);
  
  useEffect(() => {
    scoreFetch(LearnerId, TopicId);
  }, []);

  const scoreFetch = async (LearnerId, TopicId) => {
    try {
      const ScoreDataArray = await TopicScoreApi(LearnerId, TopicId);
      setViewScoresList(ScoreDataArray);
    }
    catch (error) {
      console.error('error in fetch', error);
    }
  };

  return (
    <>
      <div className='mt-5'>
        <div className='container d-flex justify-content-center'>
          <h1> View Topic Scores </h1>
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Topic Name</th>
                <th>Score</th>
                <th>Completion Status</th>
              </tr>
            </thead>
            <tbody>
              {ViewScoresList.map((scoreItem, index) => (
                <tr key={index}>
                  <td>{scoreItem.courseTitle}</td>
                  <td>{scoreItem.topicName}</td>
                  <td>{scoreItem.score}</td>
                  <td>{scoreItem.completionStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TopicScore;


 