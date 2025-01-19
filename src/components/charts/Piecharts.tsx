import React from 'react'
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS ,Tooltip,Legend,ArcElement,ChartOptions} from "chart.js"
import "./pie.css"

ChartJS.register(Tooltip,Legend,ArcElement)

interface  pieChartProps {
  data: Record<string, number>;
}

const  PieChart: React.FC< pieChartProps> = ({ data }) => {
    const options: ChartOptions<'pie'> = {
        responsive: true,
         
        plugins: {
          legend: {
            position: 'bottom', // Ensure "bottom" is explicitly set as a valid position
            labels: {
                color: 'white', // Set the legend text color to white
              },
          },
          title: {
            display: true,
             text:"Insight Summary",
             font: {
              size: 24, // Increase the title font size here
              
            },
            padding: {
              top: 10,
              bottom: 20,
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
        
        backgroundColor: ["#2aa8f2","#fae442","#ff6355","#92C5F9","#B9DAFC"],
        borderColor:"#25262a",
        hoverOffset:0,
        spacing:0,
        
        
         
      },
      
    ],
    
  };

  return <div className=" pie-container">
  <Pie className='barmain' options={options} data={chartData}  height={100} />
</div>
};

export default  PieChart;
