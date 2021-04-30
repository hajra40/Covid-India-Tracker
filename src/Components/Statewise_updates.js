import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react'
import {  Typography } from '@material-ui/core'
import '../App.css'
import { withStyles } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

const HospitalsBeds = () => {
    const [lastupdated , setlastupdated] = useState('');
    const [statewise_updates , setStatewise_updates] = useState([])

    useEffect(() => {

        const statewise_updates = async () => {
            await fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then(data=> data.json())
            .then(res => {
                setStatewise_updates(res.data.regional)
                setlastupdated(res.lastRefreshed)
            })
            .catch(err => alert(err))
        }

        statewise_updates();
    } , [])


    return (
        <div>
            <h3 style={{padding: '1rem'}}>Live Statewise Updates</h3>
            <Typography color="textSecondary" style={{padding: '1rem'}}>
                Last Updated : {lastupdated}
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>State</StyledTableCell>
                            <StyledTableCell>Total Confirmed</StyledTableCell>
                            <StyledTableCell>Total Deaths</StyledTableCell>
                            <StyledTableCell>Total Discharged</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        statewise_updates.map((state , id) => (
                            <StyledTableRow key={id}>
                                <StyledTableCell>{state.loc}</StyledTableCell>
                                <StyledTableCell>{state.totalConfirmed}</StyledTableCell>
                                <StyledTableCell>{state.deaths}</StyledTableCell>
                                <StyledTableCell>{state.discharged}</StyledTableCell>
                            </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default HospitalsBeds
