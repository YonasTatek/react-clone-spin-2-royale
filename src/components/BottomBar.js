import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const List=[{title:"06 Santa Moinca",title2:"GREYHOUNDINGS RACING"},{title:"Keno Deluxe Santa Moinca",title2:"kENO"},{title:"Ethiopian League",title2:"LEAGUE"},{title:"Spin 2 Win Royale",title2:"SPIN 2 WIN"}]
export default function BottomBar() {
  return (
    <Box sx={{ flexGrow: 1,height:"50px",backgroundColor:"blue" }} raised>
      <Grid container justifyContent="flex-end"  style={{height:"100%"}} >
    
    {
      List.map((value,index)=>{
       return <Grid item xs={3}   style={{height:"100%",borderRight:"1px solid black"}} sx={{boxShadow:4}}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
  alignItems="center"
            style={{height:"100%"}}
          >
            <Grid item xs={1} >
              <DirectionsRunIcon></DirectionsRunIcon>
            </Grid>
            <Grid item xs={11} style={{height:"100%"}}>
            <Grid
            spacing={0}
  container
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  style={{height:"100%"}}
>
<Grid item xs={1} >
<p style={{margin:0,padding:0,fontSize:10,fontWeight:"bold",color:"#D7E311"}}>{value.title}</p>
        </Grid>
        <Grid item xs={4} >
       <p style={{margin:0,padding:0,fontSize:14,fontWeight:"bold",color:"#DFDEFB"}}>{value.title2}</p>
        </Grid>
</Grid>
            </Grid>
        
          </Grid>
        </Grid>
      })
    }
       
     
      </Grid>
    </Box>
  );
}
