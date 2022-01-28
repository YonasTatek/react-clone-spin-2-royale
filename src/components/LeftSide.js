
import React from 'react'
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import LeftBody from './LeftBody';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function LeftSide() {
    return (
        <>

<Grid
  container
  direction="column"
  alignItems="stretch"

  
>
  <Grid item xs={2} >
  <TopBar/>
  </Grid>
  <Grid item xs={8}>
  <LeftBody/> 
  </Grid>
  <Grid item xs={2} style={{marginTop:45}}>
  <BottomBar/>
  </Grid>
  
</Grid>
          
          
         
        </>
    )
}


