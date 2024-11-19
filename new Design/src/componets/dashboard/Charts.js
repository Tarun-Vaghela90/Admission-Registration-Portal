import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function Charts() {
  const [pieChartData, setPieChartData] = useState({
    labels: ['Red', 'Green', 'Blue'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  });

  return (
    <div className="chart">
      <Pie data={pieChartData} />
      <p>Applications</p>
    </div>
  );
}

export default Charts;