import React from 'react'
import {Grid,Button,TextField,FormControl} from "@mui/material"
import { useState } from 'react'

export const Adduser = ({handleAdd}) => {
    const [user,setUser]=useState({})
  return (
    <div>
        <h1 style={{textAlign:"center"}} >REGISTRATION FORM</h1>
        <Grid container spacing={4}>
        <Grid item xs={3} >
         <TextField variant='outlined' type="text"  label="First Name" onChange={(e)=>setUser({name:e.target.value})} fullWidth/>
        </Grid>
        <Grid item xs={3} >
         <TextField variant='outlined' type="text"    label="Email Id" onChange={(e)=>setUser({...user,email:e.target.value})} fullWidth  />
        </Grid>
        <Grid item xs={3} >
         <TextField variant='outlined' type="number"   label="Mobile No" onChange={(e)=>setUser({...user,mobile:e.target.value})} fullWidth />
        </Grid> 
        <Grid item xs={3} >
            <Button variant='contained' sx={{padding:1.9}} onClick={()=>handleAdd(user)} fullWidth >Add User</Button>
        </Grid>
        </Grid>
    </div>
  )
}