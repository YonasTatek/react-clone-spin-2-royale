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
    <Box sx={{ flexGrow: 1 }} style={{backgroundColor:"#1F1FFA",padding:3,marginRight:3,marginLeft:3}}>
      <Grid   container
  direction="row"
  justifyContent="space-between"
  alignItems="flex-start" >
        <Grid item xs={6}>
          <p style={{margin:0,padding:0,fontSize:10,fontWeight:"bold",color:"white"}}>Selection</p>
        </Grid>
        <Grid item xs={2}>
        <p style={{margin:0,padding:0,fontSize:10,fontWeight:"bold",color:"white"}}>Odds</p>
        </Grid>
        <Grid item xs={2}>
        <p style={{margin:0,padding:0,fontSize:10,fontWeight:"bold",color:"white"}}>Stake</p>
        </Grid>
      </Grid>
    </Box>
  );
}
