import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ChartOptions } from 'chart.js';
import "./bar.css";

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface BarChartProps {
  data: Record<string, number>;
}

const HoBarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Categories',
        data: Object.values(data),
        backgroundColor: '#61d991',
        borderColor: '#ffffff',
        borderRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y', // Set horizontal bar chart
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Explicitly defined position
        labels: {
          color: 'white', // Set the legend text color to white
        },
      },
    },
    scales: {
      // Adjust text color for the scale (axis) labels
      x: {
        ticks: {
          color: 'white', // Set color of the x-axis labels
        },
      },
      y: {
        ticks: {
          color: 'white', // Set color of the y-axis labels
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar className="barmain" data={chartData} options={options} />
    </div>
  );
};

export default HoBarChart;
