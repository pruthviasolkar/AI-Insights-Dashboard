import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiData } from './mock/mockApi';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './store/slices/aiDataSlice';
import { RootState, AppDispatch } from './store';
import "./App.css"
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import PieChart from './components/charts/Piecharts';
 
import HoBarChart from './components/charts/Hobar';
import DoughnutChart from './components/charts/Doughnut.tsx';
 

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { aiData, loading } = useSelector((state: RootState) => state.aiData);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataStart());
      try {
        const data = await fetchAiData();
        dispatch(fetchDataSuccess(data));
      } catch {
        dispatch(fetchDataFailure());
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <div className='head'><h1>AI Insights Dashboard</h1></div>
    <div className='maindash'>
      
     
      <div >
      {aiData && (
        <><div className='chartsrow1'>
          
          <LineChart dayWiseData={aiData.response_times.day_wise}
        weekWiseData={aiData.response_times.week_wise} />
        <DoughnutChart data={aiData.usage_statistics.by_country}/>
           
          </div>
          <div className='chartsrow2'>
          <PieChart data={aiData.insight_summary}/>
          <BarChart data={aiData.category_distribution} />
          <HoBarChart data={aiData.usage_statistics.by_platform} />
          
          </div>

          
          
        </>
      )}
      </div>
      
    </div></>
    
  );
};

export default App;
