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
    <div className="chart-container  container w-100  shadow p-3 mb-5 rounded-4" >
      <Chart options={options} series={series} type="line" width="570" />
    </div>
  );
};

export default ApexChart;
