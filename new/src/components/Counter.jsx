import { Typography,Button } from '@mui/material'
import React, { useState }  from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const handleAdd = () => {
      setCount(count + 1);
    };
  
    const handleSubtract = () => {
      setCount(count - 1);
    };


  return (
    <div>
        <Typography variant='h4' >counter:{count}=====</Typography>
        <Button variant='contained' color='success' onClick={handleAdd}>+</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' color='error' onClick={handleSubtract}>-</Button>&nbsp;
    </div>
  )
}


export default Counter