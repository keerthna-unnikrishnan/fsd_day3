import { Button, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'

const Threebuttons = () => {
    var[val,setval]=useState()
    const submit =()=>{
        setval("React")
      }
      const angularsubmit =()=>{
        setval("Angular")
      }
      const vuesubmit =()=>{
        setval("Vue")
      }
 
    //   use effect
    useEffect(() => {
        angularsubmit()
    },[])


  return (
    <div>
         <Typography variant='h4' >Welcome to:{val}</Typography>
       
        <Button variant='contained' color='primary' onClick={submit} >REACT</Button>&nbsp;
        <Button variant='contained' color='secondary' onClick={angularsubmit} >ANGULAR</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' color='primary' onClick={vuesubmit}>VUE</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Threebuttons