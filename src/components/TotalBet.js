import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid   container
  direction="column"
  justifyContent="flex-end"
  alignItems="flex-end"
  style={{backgroundColor:"#1F1FFA",paddingTop:4,paddingLeft:4,paddingRight:4,borderBottom:"1px solid grey"}}
   >
        <Grid item xs={4}>
          <p style={{margin:0,padding:0,color:"white",fontSize:12,fontWeight:"bold"}}>Total Bet</p>
        </Grid>
        <Grid item xs={4}>
        <p style={{margin:0,padding:0,color:"white",fontSize:16,fontWeight:"bold"}}>ብር 0</p>
        </Grid>
        
      </Grid>
    </Box>
  );
}
