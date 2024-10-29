import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbark = () => {
  return (
    <div>
        
         <AppBar color='secondary' >
        <Toolbar >
          <Typography variant="h6" > Photos </Typography>
          <Box sx={{marginLeft:'auto'}}>
          <Link to='/gro'>
          <Button color="inherit" sx={{marginLeft: 1 }}>state</Button>
          </Link>
         
          <Link to='/'>
          <Button color="inherit" sx={{marginLeft: 1 }}>Home</Button>
          </Link>
          <Link to='/cro'>
          <Button color="inherit" sx={{marginLeft: 1 }}>count</Button>
          </Link>
          <Link to='/fro'>
          <Button color="inherit" sx={{marginLeft: 1 }}>change</Button>
          </Link>
         

          </Box>
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    
    </div>
  )
}

export default Navbark