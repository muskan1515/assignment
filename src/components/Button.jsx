// This component handle all the configuration and alignment of the buttons

import React from 'react'

const Button = ({label,action}) => {
  return (
    <button style={{width:120 , height:20}} 
    onClick={()=>action()}>{label}</button>
  )
}

export default Button ;