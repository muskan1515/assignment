// This component will create the barchart for the specified array

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { labels,dataValue} from '../helper/Data';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ButtonComp from './ButtonComp';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  }
};






export const BarChart = () =>{
  const [data,setData]=useState(dataValue);
  const [change,setChange]=useState(false);
  const [dataOption,setDataOption]=useState({
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  });

  useEffect(()=>{

    setChange(false);
    const value=data;
    setDataOption({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: value,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ],
    })
  },[change===true]);
 
 
  

  return (
    <>
        
       <ButtonComp data={data} setData={setData} setChange={setChange}/>
       <Bar options={options} data={dataOption} />
    </>
    )
}