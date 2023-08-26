//This is a helper page that have all the required and important data and functions

export const labels = ['Index1', 'Index2', 'Index3', 'Index4', 'Index5', 'Index6'];

export const dataValue=[10,32,43,78,21,98];

export function insertionSort(array,setData,setChange) {
    setChange(true);
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > currentValue) {
        array[j + 1] = array[j];
        j--;
      }
  
      array[j + 1] = currentValue;
    }
  
   setData(array);
  }

  export function bubbleSort(array,setData,setChange) {

    setChange(true);
    let swapped = true;
  
    for (let i = 0; i < array.length - 1 && swapped; i++) {
      swapped = false;
  
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
    }
  
    setData(array);
  }
  
  export function  selectionSort(array,setData,setChange) {

    setChange(true);
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  
    setData( array);
  }
  
   function quickSort(array,low,high) {
    
    if (low < high) {
      let pivot = array[Math.floor((low + high) / 2)];
  
      let i = low;
      let j = high;
  
      while (i <= j) {
        while (array[i] < pivot) {
          i++;
        }
  
        while (array[j] > pivot) {
          j--;
        }
  
        if (i <= j) {
          [array[i], array[j]] = [array[j], array[i]];
          i++;
          j--;
        }
      }
  
      quickSort(array, low, j);
      quickSort(array, i, high);
    }
  
    return array;
  }

  export function quickedSort(data,setData,setChange){
    const high=data.length-1;
    setChange(true);
    setData(quickSort(data,0,high));
  }

   function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
  
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    return  merge(sortedLeft, sortedRight);
  
  }
  
  function merge(left, right) {
    const merged = [];
  
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
  
    merged.push(...left.slice(i));
    merged.push(...right.slice(j));
  
    return merged;
  }

  export function mergedSort(data,setData,setChange){

        setChange(true);
        setData(mergeSort(data));
  }

  export function resize(data,setData,setChange){
    const tmpArray=data;
    const resizedArray=tmpArray.map((val,key)=>{
      let tmp=Math.floor(val/2);
      if(tmp<=0){
        tmp=Math.floor(Math.random() * 100 )+ 1;
      }
      return tmp;
    });
    setData(resizedArray);
    setChange(true);
  };

 
  export function randomize(data,setData,setChange){
    const array=data;
    const len=array.length;
    for (let i = 0; i <len; i++) {
      const idx=(i+2)%len;
      array[i]=array[idx];
    };
   
    setData(array);
    setChange(true);
  }
  
  
export const ButtonData=[
    "Insertion Sort",
    "Selection Sort",
    "Bubble Sort",
    "Quick Sort",
    "Merge Sort",
    "Resize",
    "Randomize",
];