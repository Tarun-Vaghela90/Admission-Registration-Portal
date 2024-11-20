import React from 'react';
import Chart from 'react-apexcharts';

const ApexChart = ({ data }) => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
  };

  // Check if data is defined and has series
  const series = data && data.length > 0 ? data : [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <div className="chart-container container w-100 shadow p-3 rounded-4">
      <Chart options={options} series={series} type="line" width="560" />
    </div>
  );
};

export default ApexChart;
