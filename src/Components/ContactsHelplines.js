import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap';
import {  TextField } from '@material-ui/core'

const ContactsHelplines = () => {
    const [regional , setregional] = useState([]);
    const [primarynum , setPrimarynum] = useState('')
    const [primaryemail , setPrimaryemail] = useState('')
    const [primarytwitter , setPrimarytwitter] = useState('')
    const [primaryfacebook , setPrimaryfacebook] = useState('')
    const [input , setinput] = useState('')

    useEffect(() => {
        const getContactsHelplines = async () => {
            await fetch('https://api.rootnet.in/covid19-in/contacts')
            .then(data=> data.json())
            .then(res => {
                setregional(res.data.contacts.regional)
                setPrimarynum(res.data.contacts.primary.number)
                setPrimarytwitter(res.data.contacts.primary.twitter)
                setPrimaryfacebook(res.data.contacts.primary.facebook)
                setPrimaryemail(res.data.contacts.primary.email)
            })
            .catch(err => {
                alert(err)
            })
        }

        getContactsHelplines();
    } , [])

    const onInputChange = (e) => {
        setinput(e.target.value);
    }

    let filterState = regional.filter((region) => {
        return region.loc.toLocaleLowerCase().includes(input.toLocaleLowerCase());
    })

    return (
        <div className="contacts">
            <h1>Contacts & Helpline Available</h1>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Body class="card_helpline">
                        <Card.Title>Primary Contacts</Card.Title>
                        <Card.Text>
                            <strong>
                                Number </strong> : {primarynum}
                            
                            <br />
                            <strong>Email</strong> : {primaryemail}<br />
                            <strong>Twitter </strong>: {primarytwitter}<br />                            
                            <strong>Facebook </strong> : {primaryfacebook}                         
                            
                        </Card.Text>
                    </Card.Body>
                </Card>

            <h4>Regional Contacts</h4>
            <TextField value={input} onChange={onInputChange} id="outlined-basic" label="State" variant="outlined" />
            <div className="grid_cards">
                 {
                    filterState.map((region , id) => {
                        return (
                            <Card key={id} className="card_help" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><strong>{`${region.loc}`}</strong></Card.Title>
                                    <Card.Text>
                                        Helpline: {`${region.number}`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
               
        </div>
    )
}

export default ContactsHelplines
