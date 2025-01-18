import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement ,ChartOptions} from 'chart.js';
import "./bar.css"

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface BarChartProps {
  data: Record<string, number>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const options: ChartOptions<'bar'> = {
            responsive: true,
             
            plugins: {
              legend: {
                position: 'bottom', // Ensure "bottom" is explicitly set as a valid position
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
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Categories',
        data: Object.values(data),
        
        backgroundColor: '#5d40be52',
        borderColor:"#ffffff",
        
        borderRadius:10,
      },
      
    ],
    
  };

  return <div className="chart-container">
  <Bar className='barmain' options={options} data={chartData} />
</div>
};

export default BarChart;
