import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS ,Tooltip,Legend,ArcElement,ChartOptions} from "chart.js"
import "./doughnut.css"

ChartJS.register(Tooltip,Legend,ArcElement)

interface doughnutChartProps {
  data: Record<string, number>;
}

const  DoughnutChart: React.FC<doughnutChartProps> = ({ data }) => {
    const options: ChartOptions<'doughnut'> = {
        responsive: true,
         
        plugins: {
          legend: {
            position: 'bottom', // Ensure "bottom" is explicitly set as a valid position
            labels: {
                color: 'white', // Set the legend text color to white
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
        
        backgroundColor: ["#2aa8f2","#fae442","#8bd448","#ff6355","#9c4f96"],
        borderColor:"#25262a",
        hoverOffset:0,
        spacing:0,
        
        
         
      },
      
    ],
    
  };

  return <div className="doughnut-container">
  <Doughnut className='barmain' options={options} data={chartData}  height={100} />
</div>
};

export default  DoughnutChart;
