import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Grapes'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 43];

  return (
    <div className="chart-container">
      <Chart options={options} series={series} type="pie" width="380" />
    </div>
  );
};

export default PieChart;
