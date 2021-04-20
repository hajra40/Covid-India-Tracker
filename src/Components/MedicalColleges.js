import React, { useEffect, useState } from 'react'

const MedicalClgs = () => {
    const [mdclgs, setMdclgs] = useState([]);

    useEffect(() => {
        const getMedicalClgs = async () => {
            await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
            .then(data=> data.json())
            .then(res => {
                setMdclgs(res.data.medicalColleges)
            })
            .catch(err => alert(err))
        }

        getMedicalClgs();
    })
    return (
        <div className="guideline">
            {
                mdclgs.map((mdclg) => {
                    return (
                        <div>
                            <h3>{mdclgs.state}</h3>
                            <h3>{mdclgs.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MedicalClgs
