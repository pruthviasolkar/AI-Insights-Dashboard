import React from "react";
import { Bar } from "react-chartjs-2";
import "./bar2.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface UserSatisfactionChartProps {
  data: { rating: number; count: number }[];
}

const UserSatisfactionChart: React.FC<UserSatisfactionChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => `Rating ${item.rating}`), // e.g., "Rating 1", "Rating 2"
    datasets: [
      {
        label: "User Satisfaction Ratings",
        data: data.map((item) => item.count), // [15, 35, 200, 500, 600]
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        borderWidth: 1,
        borderRadius:5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
            color: 'white', // Set the legend text color to white
          },
      },
      title: {
        display: true,
         
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
    <div  className="bar2-container">
      <Bar className='barmain' data={chartData} options={options} />
    </div>
  );
};

export default UserSatisfactionChart;
