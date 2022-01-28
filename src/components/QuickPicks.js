import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "black",
  fontWeight:"bold",

}));

export default function QuickPicks() {
  return (
    <Box sx={{ flexGrow: 1 ,marginTop:2}}>

<Grid container style={{marginLeft:15,marginBottom:4}}>
        <Grid item xs={3} style={{backgroundColor:"#F1F1F1",borderTop:"1px solid grey",borderRight:"1px solid grey",borderLeft:"1px solid grey",marginRight:2}}>
          <p style={{fontWeight:"bold",textAlign:"center",padding:0,fontSize:11}}>Quick Picks</p>
        </Grid>
        <Grid item xs={3} style={{backgroundColor:"#C1B5B5",borderTop:"1px solid grey",borderRight:"1px solid grey",borderLeft:"1px solid grey"}}>
          <p style={{fontWeight:"bold",textAlign:"center",padding:0,fontSize:11,color:"grey"}}>MULTIPLAYER X1</p>
        </Grid>
        </Grid>
        <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="stretch"
  spacing={1}
  style={{backgroundColor:"#F1F1F1"}}
>
        <Grid item xs={2} >
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>7</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>10</Item>
        </Grid>
       
        
      </Grid>
    </Box>
  );
}
