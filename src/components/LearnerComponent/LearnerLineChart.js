// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
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

const LineChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Enrollment Statistics',
        data: chartData.data,
        borderColor: '#27235C',
        backgroundColor: '#f0f0f0',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Enrollment Trends',
      },
    },
  };

  return(
  <div className='line-graph'>

  
  <Line data={data} options={options} />;
  </div>
  )
};

export default LineChart;