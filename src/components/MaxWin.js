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
      <Grid  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  style={{backgroundColor:"#1F1FFA",margin:0,padding:2}}
  >
        <Grid item xs={8}>
        <p style={{margin:0,padding:0,color:"#DADADA",fontSize:9,fontWeight:"bold"}}>Max. Winning</p>
        </Grid>
        <Grid item xs={4}>
        <p style={{margin:0,padding:0,color:"#DADADA",fontSize:12,fontWeight:"bold",textAlign:"end"}}>ብር 0</p>
        </Grid>
      </Grid>
    </Box>
  );
}
