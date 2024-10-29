import { Button, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

const State = () => {

    var[name,setname]=useState(" keerthna")
    var[val,setval]=useState()

    const handleInput = (e) =>{
        console.log(e.target.value)
        setname(e.target.value)
    }
      const submit =()=>{
        setval(name)
      }
    
  return (
    <div>
        
<Typography variant='h6'>
    welcome{val}
</Typography>
<TextField variant='outlined'  onChange={handleInput} label="Enter the name"></TextField> <br /><br />
<Button  variant='contained' color="inherit" onClick={submit}>Submit</Button>


    </div>
  )
}

export default State