// LineChart.js
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { TopicScoreApi } from '../../middleware/LearnerMiddleware/TopicScoreApi';
import '..//..//.//Styles/Learner/LearnerDashboard.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



  

 


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Score Trends Over Time',
      },
    },
    scales:{
      X:{
        type:'time',
        time:{
          unit:'month'
        }
      }
    }
  };
 

  const LineChart = () => {
    const [chartData,setChartData] = useState([]);
    const [TopicId] = useState("2df47ffa-3fc0-44c7-b869-c403f5542150");
    const [LearnerId] = useState("6bdbab27-c637-48ff-850e-2cf9eb700a40");
    
    useEffect(() => {
      fetchLineData(LearnerId,TopicId);
    });
    const fetchLineData = async (LearnerId,TopicId) =>{
      try{
        const chartDataResponse = await
        TopicScoreApi(LearnerId,TopicId);
        setChartData(chartDataResponse);
      }catch(error)
      {
        console.error("Error fetching data",error);
      }
      };
   
    const data = {
      labels: chartData.map(item => new Date(item.createdat).toLocaleDateString()),
      datasets: [
        {
          label: 'Learner Progress',
          data: chartData.map(item => item.score),
          borderColor: '#27235C',
          backgroundColor: '#f0f0f0',
        },
      ],
    };

  return(
  <div className='line-graph'>

  
  <Line data={data} options={options} />;
  </div>
  )
};

export default LineChart;