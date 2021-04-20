import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react'
import {Row,  Col} from 'react-bootstrap'
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

    useEffect(() => {
        const getHospitasBeds = async () => {
            await fetch('https://api.rootnet.in/covid19-in/hospitals/beds')
            .then(data=> data.json())
            .then(res => {
                // console.log(res)
                setHospitals(res.data.regional)
            })
            .catch(err => alert(err))
        }

        getHospitasBeds()
    } , [])

    return (
        <div>
            <h1>Hospitals & Beds</h1>
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
                        hospitals.map((hospital) => (
                            <StyledTableRow key={hospital.name}>
                                {/* <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell> */}
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
            {/* <Row>
                <Col>
                    <Table class="table">
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Rural Beds</th>
                                <th>Rural Hospitals</th>
                                <th>Total Beds</th>
                                <th>Urban Beds</th>
                                <th>Urban Hospitals</th>
                                <th>total Hospitals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hospitals.map((hospital) => {
                                    return (
                                        <tr key={hospital.state}>
                                                <td>{hospital.state}</td>
                                                <td>{hospital.ruralBeds}</td>
                                                <td>{hospital.ruralHospitals}</td>
                                                <td>{hospital.totalBeds}</td>
                                                <td>{hospital.urbanBeds}</td>
                                                <td>{hospital.urbanHospitals}</td>
                                                <td>{hospital.totalHospitals}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col> */}
            {/* </Row> */}
        </div>
    )
}

export default HospitalsBeds
