import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import RightSide from './components/RightSide';

import LeftSide from './components/LeftSide';
import './index.css'
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container 
       direction="row"
        alignItems="stretch"

      >
        <Grid item xs={10}>
        <LeftSide/>
        </Grid>
        <Grid item xs={2}>
         <RightSide/>
        </Grid>
        
      </Grid>
    </Box>
  );
}
