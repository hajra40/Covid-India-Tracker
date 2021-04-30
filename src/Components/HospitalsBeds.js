import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react'
import {  TextField } from '@material-ui/core'
// import Table from 'react-bootstrap/Table'
import '../App.css'
import { makeStyles, withStyles } from '@material-ui/core';

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

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  

const HospitalsBeds = () => {

    const [hospitals, setHospitals] = useState([]);
    const [input , setinput] = useState('');
    const [statewise_updates , setStatewise_updates] = useState([])

    useEffect(() => {
        const getHospitasBeds = async () => {
            await fetch('https://api.rootnet.in/covid19-in/hospitals/beds')
            .then(data=> data.json())
            .then(res => {
                setHospitals(res.data.regional)
            })
            .catch(err => alert(err))
        }

        getHospitasBeds()
    } , [])

    const onInputChange = (e) => {
        setinput(e.target.value);
    }

    let filterState = hospitals.filter((region) => {
        return region.state.toLocaleLowerCase().includes(input.toLocaleLowerCase());
    })

    return (
        <div>
            <h3 style={{padding: '1rem'}}>Total beds available in urban and rural hospitals</h3>

            <TextField style={{margin: '1rem'}} value={input} onChange={onInputChange} id="outlined-basic" label="State" variant="outlined" />

            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>State</StyledTableCell>
                            <StyledTableCell>Total Beds</StyledTableCell>
                            <StyledTableCell>Total Hospitals</StyledTableCell>
                            <StyledTableCell>Rural Beds</StyledTableCell>
                            <StyledTableCell>Rural Hospitals</StyledTableCell>
                            <StyledTableCell>Urban Beds</StyledTableCell>
                            <StyledTableCell>Urban Hospitals</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        filterState.map((hospital , id) => (
                            <StyledTableRow key={id}>
                                <StyledTableCell>{hospital.state}</StyledTableCell>
                                <StyledTableCell>{hospital.totalHospitals}</StyledTableCell>
                                <StyledTableCell>{hospital.totalBeds}</StyledTableCell>
                                <StyledTableCell>{hospital.ruralBeds}</StyledTableCell>
                                <StyledTableCell>{hospital.ruralHospitals}</StyledTableCell>
                                <StyledTableCell>{hospital.urbanBeds}</StyledTableCell>
                                <StyledTableCell>{hospital.urbanHospitals}</StyledTableCell>
                            </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default HospitalsBeds
