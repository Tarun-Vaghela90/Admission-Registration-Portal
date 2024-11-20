import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ totalApplications, acceptedApplications, rejectedApplications }) => {
  // Calculate the number of rejected applications
  const rejectedApplicationsCount = totalApplications - acceptedApplications;

  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Accepted Applications', 'Rejected Applications'],
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

  // Series data
  const series = [acceptedApplications, rejectedApplicationsCount];

  return (
    <div className="chart-container container w-100 shadow p-3 rounded-4">
      <Chart options={options} series={series} type="pie" width="500" />
    </div>
  );
};

export default PieChart;
