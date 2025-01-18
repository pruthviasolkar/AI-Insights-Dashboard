import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ChartOptions } from 'chart.js';
import "./line.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface LineChartProps {
  dayWiseData: { date: string; average_time: number }[];
  weekWiseData: { date: string; average_time: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ dayWiseData, weekWiseData }) => {
  const options: ChartOptions<'line'> = {
          responsive: true,
           
          plugins: {
            legend: {
              position: 'bottom', // Ensure "bottom" is explicitly set as a valid position
              labels: {
                  color: 'white', // Set the legend text color to white
                },
            },
          },
          animations: {
            tension: {
              duration: 4000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
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
  const chartData = {
    labels: dayWiseData.map((item) => item.date), // Assuming day-wise and week-wise data share the same x-axis labels.
    datasets: [
      {
        label: 'Day-Wise Response Time',
        data: dayWiseData.map((item) => item.average_time),
        borderColor: '#61d991',
        backgroundColor: '#61d99133', // Slightly transparent for better visualization
        tension: 0.4,
      },
      {
        label: 'Week-Wise Response Time',
        data: weekWiseData.map((item) => item.average_time),
        borderColor: '#4B7BEC',
        backgroundColor: '#4B7BEC33',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="linechart-container">
      <Line className="linemain" options={options} data={chartData} height={100} />
    </div>
  );
};

export default LineChart;
