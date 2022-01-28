import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const color=["Red","Black","Green"]
const dozen=["1-12","13-24","25-36"]
const even=["Even","Odd"];
const low=["High","Low"];
 const ListBox=(props)=>{
return(
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{
    props.list.map((data,index)=><Grid item xs={2} sm={4} md={4}>
      <Item style={{fontWeight:"bold",color:"black",letterSpacing:1.1}}>{data}</Item>
    </Grid>
    )
}

   
  
</Grid>)


}
const Text=(props)=>{
 return <p style={{fontWeight:"bold",letterSpacing:1.1,borderBottom:"4px solid black"}}>{props.value}</p>
}
export default function Description() {
  return (
    <Box sx={{ flexGrow: 1 ,marginTop:2,marginLeft:3}}>
    <Grid container style={{marginLeft:15}} >
        <Grid item xs={2} style={{backgroundColor:"#F1F1F1",borderTop:"1px solid grey",borderRight:"1px solid grey",borderLeft:"1px solid grey",marginRight:2}}>
          <p style={{fontWeight:"bold",textAlign:"center",padding:0,fontSize:11}}>MAIN</p>
        </Grid>
        <Grid item xs={3} style={{backgroundColor:"#C1B5B5",borderTop:"1px solid grey",borderRight:"1px solid grey",borderLeft:"1px solid grey",marginRight:2}}>
          <p style={{fontWeight:"bold",textAlign:"center",padding:0,fontSize:11,color:"grey"}}>SECTIONS /FINALS</p>
        </Grid>
        <Grid item xs={3} style={{backgroundColor:"#C1B5B5",borderTop:"1px solid grey",borderRight:"1px solid grey",borderLeft:"1px solid grey"}}>
          <p style={{fontWeight:"bold",textAlign:"center",padding:0,fontSize:11,color:"grey"}}>EXTRA BETS</p>
        </Grid>
        </Grid>
     <Grid
  container
  direction="column"
  justifyContent="space-between"
  alignItems="stretch"
  style={{backgroundColor:"#F1F1F1"}}

>
        <Grid item xs={8} style={{marginLeft:8,marginRight:8}}>
       
        <Text value="Colours"/>
         
       
<ListBox list={color}/>
        </Grid>
        <Grid item xs={8} style={{marginLeft:8,marginRight:8}}>
        <Text value="Dozens"/>
<ListBox list={dozen}/>
        </Grid>
        <Grid item xs={8} style={{marginLeft:8,marginRight:8}}>
        <Text value="Even/Odd"/>
<ListBox list={even}/>
        </Grid>  
        <Grid item xs={8} style={{marginLeft:8,marginRight:8,marginBottom:8}}>
        <Text value="Low / HIgh"/>
<ListBox list={low}/>
        </Grid>
        
      </Grid>
    </Box>
  );
}
