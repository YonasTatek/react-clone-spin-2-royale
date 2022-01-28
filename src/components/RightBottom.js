import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PrintIcon from '@mui/icons-material/Print';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));
const FirstRow=["5","10","30","50"];
const SecondRow=["100","300","500","1K"];
const ThirdRow=["1.5k"];


const List=(props)=>{
    return <Box sx={{ flexGrow: 1 }}>
    <Grid container >
    {
        props.list.map((data,index)=>
            <Grid item xs={3} style={{padding:2}}>
        <Item style={{color:"black",fontWeight:"bold"}}>{data}</Item>
      </Grid>
        )
    }
      
     
    </Grid>
  </Box>
}

export default function RightButton() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container  direction="column">
        <Grid item xs={6}>
        <Grid container  justifyContent="space-between" alignItems="center">
        <Grid item xs={2}>
        <Grid item xs={8} style={{padding:2}}>
        <p style={{margin:0,padding:0,color:"#DADADA",fontSize:9,fontWeight:"bold",textAlign:'center'}}>Stake:</p>
        </Grid>
        </Grid>
        <Grid item xs={8} style={{padding:5}}>
        <p style={{margin:0,padding:6,color:"black",fontSize:15,fontWeight:"bold",textAlign:'end',backgroundColor:"white"}}>ብር 5</p>
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs={2} >
         <List list={FirstRow}/>
        </Grid>
        <Grid item xs={2}>
        <List list={SecondRow}/>
        </Grid>
        <Grid item xs={2}>
        <List list={ThirdRow}/>
        </Grid>
        <Grid item xs={12}>
        <Box sx={{ flexGrow: 1 }} style={{marginTop:97}}>
      <Grid container   
  direction="row"
  justifyContent="center"
 
  style={{padding:5}}
 spacing={1}
  >
        <Grid item xs={3} style={{textAlign:"center"}}>
        <Item style={{backgroundColor:"grey"}}>
         
          <DoneIcon style={{color:"green"}}/>

          </Item>
        </Grid>
        <Grid item xs={3} style={{textAlign:"center"}}>
        <Item >
         
          <CancelIcon style={{color:"#EB3535"}}/>

          </Item>
        </Grid>
        <Grid item xs={3} style={{textAlign:"center"}}>
        <Item >
         
          <QrCodeIcon style={{color:"black"}}/>

          </Item>
        </Grid>
        <Grid item xs={3} style={{textAlign:"center"}}>
        <Item style={{backgroundColor:"#498549"}}>
         
          <PrintIcon style={{color:"white"}}/>

          </Item>
        </Grid>
       
      </Grid>
    </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
