import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RightHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}  style={{paddingLeft:8,paddingTop:8,margin:0}}>
 <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="stretch"
>
        <Grid item xs={4}  >
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
 

>

<Grid item xs={2} style={{padding:0,margin:0}}>
          <PaymentIcon style={{fontSize:17,padding:0,margin:0,color:"grey"}}/>
        </Grid>
        <Grid item xs={3} style={{fontSize:17,padding:0,margin:0}}>
         <p style={{fontSize:12,padding:0,margin:0,fontWeight:"bold",color:"white"}}>ብር 5K</p>
        </Grid>
</Grid>
        </Grid>
        <Grid item xs={4}>
        <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  style={{marginLeft:5,borderLeft:"1px solid black",padding:3}}
  
>

<Grid item xs={2} style={{padding:0,margin:0}}>
          <PersonIcon style={{fontSize:17,padding:0,margin:0,color:"grey"}}/>
        </Grid>
        <Grid item xs={3} style={{fontSize:17,padding:0,margin:0}}>
        <div style={{padding:0,margin:0}}>
      
         <p style={{fontSize:12,padding:0,margin:0,fontWeight:"bold",color:"white"}}>test</p>
         </div>
        </Grid>
</Grid>
        </Grid>
        <Grid item xs={4}   style={{borderLeft:"1px solid black",padding:3}}>
         <MenuIcon style={{color:"white",fontSize:26}}/>
        </Grid>
      </Grid>
    </Box>
  );
}
