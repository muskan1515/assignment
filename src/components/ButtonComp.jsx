// This component map through all the buttons

import React from 'react'
import { bubbleSort, insertionSort, mergedSort, quickedSort, randomize, resize, selectionSort } from '../helper/Data';
import Button from './Button';

const ButtonComp = ({data,setData,setChange}) => {
  return (
    <div style={{display:'flex',flexDirection:'column',padding:'4px',margin:'6px'}}> 
      <div  style={{padding:'4px'}}>
        <Button label={"Insertion Sort"} action={()=>insertionSort(data,setData,setChange)} />
        <Button label={"Bubble Sort"} action={()=>bubbleSort(data,setData,setChange)} />
        <Button label={"Quick Sort"} action={()=>quickedSort(data,setData,setChange)} />
        <Button label={"Merge Sort"} action={()=>mergedSort(data,setData,setChange)} />
        <Button label={"Selection Sort"} action={()=>selectionSort(data,setData,setChange)} />
      </div>
      <div>
        <Button label={"Resize"} action={()=>resize(data,setData,setChange)}/>
        <Button label={"Randomize"} action={()=>randomize(data,setData,setChange)}/>
      </div>
    </div>
  )
}


export default  ButtonComp;