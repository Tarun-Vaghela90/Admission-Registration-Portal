import React from 'react';
import Chart from 'react-apexcharts';

const ApexChart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div className="chart-container">
      <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
};

export default ApexChart;
