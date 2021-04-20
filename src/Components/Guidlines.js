import React, { useEffect, useState } from 'react'
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const Guidlines = () => {
    const [guidelines , setGuidlines] = useState([]);


    useEffect(() => {
        
        const getGuidlines = async () => {
            await fetch('https://api.rootnet.in/covid19-in/notifications')
            .then(data=> data.json())
            .then(res => {
                setGuidlines(res.data.notifications)
            })
            .catch(err => alert(err))
        }

        getGuidlines();
    } ,[])

    return (
        <>
            <Jumbotron>
                <h1>Guidelines</h1>
                <p>Please read it carefully</p>

                {
                    guidelines.map((guideline) => {
                        return (
                            <ListGroup>
                                <ListGroup.Item><a className="guide" href={guideline.link} ><p>{guideline.title}</p></a></ListGroup.Item>
                            </ListGroup>
                            
                        )
                    })
                } 
            </Jumbotron>
        </>
    )
}

export default Guidlines
