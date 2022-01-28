import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    color:"white"
  },
  textAlign:"center",border:"1px solid white",backgroundColor:Math.floor(Math.random() * (1 - 0 + 1))? "#A40002":"black",color:"white",fontWeight:"bold"
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    border:"1px solid white",
   
  },
  // hide last border
  '&:last-child td, &:last-child th': {
   
    border:"1px solid white",
  

  },
  
}));

function createData(first,second,third,fourth,fifth,six) {
  return { first,second,third,fourth,fifth,six };
}

const rows = [
  createData(1, 2, 3, 4,5,6),
  createData(13, 14, 15, 16,17,18),
  createData(19, 20, 21, 22,23,24),
  createData(25, 26, 27, 28,29,30),
  createData(31, 32, 33, 34,35,36),
  
  

  
];

export default function PlayTable() {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
         
        </TableHead>
        <TableBody>
          {
          
            rows.map((row) => {
              
              
       
              
          return(<StyledTableRow key={row.first}>
             <StyledTableCell align="right" >{row.first}</StyledTableCell>
              <StyledTableCell align="right">{row.second}</StyledTableCell>
              <StyledTableCell align="right">{row.third}</StyledTableCell>
              <StyledTableCell align="right">{row.fourth}</StyledTableCell>
              <StyledTableCell align="right">{row.fifth}</StyledTableCell>
              <StyledTableCell align="right">{row.six}</StyledTableCell>
            </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
