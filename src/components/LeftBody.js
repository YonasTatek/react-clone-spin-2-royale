import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import PlayTable from './PlayTable';

import QuickPicks from './QuickPicks';
import Description from './Description';
export default function BasicGrid() {
  return (
   
      <Grid container spacing={1}  direction="row"
 

  >
        <Grid item xs={6}>
        <>
        <p style={{fontWeight:"bold",letterSpacing:1.1,padding:0,margin:8}}>Exact Number</p>
        <PlayTable/>
        <QuickPicks/>
        </>
        </Grid>
        <Grid item xs={6}>
        <Description />
        </Grid>
        
      </Grid>
  
  );
}
