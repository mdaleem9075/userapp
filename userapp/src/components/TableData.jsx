import React, { useState } from "react";
import jsonData from "./data.json";
import { Adduser } from "./Adduser";
import {
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import BasicModal from "./Model";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableData = () => {
  const [userData, setUserData] = useState(jsonData);
  const [copyUserData, setCopyUserData] = useState(jsonData);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
const [sortData,setSortData]=useState(false)
  const handleAdd = (user) => {
    setUserData([...userData, user]);
    setCopyUserData([...userData, user]);
  };
  const handleDelete = (index) => {
    const del = userData.filter((item, ind) => ind !== index);
    setUserData(del);
  };
  function compareName(a, b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}
  function compareNameDecending(a, b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    let comparison = 0;
    if (name1 < name2) {
        comparison = 1;
    } else if (name1 > name2) {
        comparison = -1;
    }
    return comparison;
}

useEffect(()=> {
	if (sortData){
		let sortName= copyUserData.sort((compareName))
		setUserData(sortName)
	}else{
		let sortName= copyUserData.sort((compareNameDecending))
		setUserData(sortName)

	}
		
},[sortData])

  
  

  useEffect(() => {
    const searchData = copyUserData.filter((item) =>
      item.name.toUpperCase()?.includes(search?.toUpperCase())
    );
    setUserData(searchData);
  }, [search]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        <Adduser handleAdd={handleAdd} />
      <Grid container spacing={4} sx={{mt:2}}>
        <Grid item xs={6} alignContent="center" align="center">
          <TextField onChange={(e) => setSearch(e.target.value)} sx={{ width: 400 }}/>
        </Grid>
        <Grid item xs={6}  align="center">
           <Button  variant="contained" onClick={()=>setSortData(!sortData)} sx={{padding:"15px",width:"400px"}} >Sort</Button>
        </Grid>
      </Grid>
	  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, mt:4}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.mobile}</TableCell>
              <TableCell align="center"><BasicModal
                    open={open}
                    handleClose={handleClose}
                    handleDelete={handleDelete}
                    index={index}
                  />
                  <Button variant="contained" color="error" onClick={handleOpen}>delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};
