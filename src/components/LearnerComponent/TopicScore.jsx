import React, { useEffect, useState } from 'react'
import { TopicScoreApi } from '../../middleware/LearnerMiddleware/TopicScoreApi';
 
function TopicScore() {
 
  const [TopicId] = useState('5eabfe71-a349-422f-af26-a060f741e6da');
  const [LearnerId] = useState('105b532c-212a-4a60-9426-551f631694dc');
//  const [LearnerId]= useState(sessionStorage.getItem('UserSessionID'));
 console.log("hello session", LearnerId);
 
  const [ViewScore, setScore] = useState({score:0});
  useEffect(() => {
    scoreFetch(LearnerId, TopicId);
  }, []);
 
 
  const scoreFetch = async () => {
    try {
      const ScoreData = await TopicScoreApi(LearnerId, TopicId);
      setScore(ScoreData[0]);
      // console.log(ViewScore);4
      console.log('scoredata',ScoreData)
     
      // return ScoreData;
     
    }
    catch (error) {
      console.error('error in fetch', error);
    }
  };
 
 
 
 
 
  return (
    <>
      <div className='mt-5'>
        <div className='container d-flex justify-content-center'>
          <h1> view topic score </h1>
          <h1>{ViewScore.score}</h1>
        <label>course Name</label>  <h1>{ViewScore.courseTitle}</h1>
      <label>Topic Name</label>    <h1>{ViewScore.topicName}</h1>
         
 
 
 
 
 
        </div>
      </div>
 
 
 
    </>
  )
}
 
export default TopicScore;
 
 
 
 
 
 

 