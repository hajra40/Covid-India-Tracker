import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import SmallScreenGraph from './SmallScreenGraph';

const Graph = () => {
    const [casesData , setcovidData] = useState([]);
    const [vaccine , setVaccine] = useState([]);

    useEffect(() => {
        const data = async () => {
            await fetch('https://api.covid19india.org/data.json')
            .then(res => res.json())
            .then(res => {
                setcovidData(res.cases_time_series)
                setVaccine(res.tested)
            })
        }

        data();
    } , [])

    let cases = [] , day = [] , date=[] , decrease = [] , recovered = [] , firstDose = [] , secondDose=[];
    casesData.map((item) => {
        day.push(item.dateymd)
        cases.push(item.dailyconfirmed)
        decrease.push(item.dailydeceased)
        recovered.push(item.dailyrecovered)
    })

    vaccine.map((item) => {
        date.push(item.testedasof)
        firstDose.push(item.firstdoseadministered)
        secondDose.push(item.seconddoseadministered)
    })

    return (
        <div>
            
            <div className="md__visible">
                <br />
                <h1>Live Graph</h1>
                <br />
                <Line
                    data = {{
                        labels: day,
                        datasets: [
                            {
                                data: cases,                      
                                label: 'Daily Confirmed',
                                backgroundColor: 'pink',
                                borderColor: 'red'
                            },
                            {
                                data: decrease,                      
                                label: 'Decrease in Cases',
                                backgroundColor: 'blue',
                                borderColor: 'black'
                            },
                            {
                                data: recovered,                      
                                label: 'Recovered',
                                backgroundColor: 'lightgreen',
                                borderColor: 'green'
                            }
                        ]
                    }}
                />

                <br />
                <h1>Vaccination Graph</h1>
                <Line
                    data = {{
                        labels: date,
                        datasets: [
                            {
                                data: firstDose,                      
                                label: 'First Dose Administered',
                                backgroundColor: 'blue',
                                borderColor: 'black'
                            },
                            {
                                data: secondDose,                      
                                label: 'Second Dose Administered',
                                backgroundColor: 'lightblue',
                                borderColor: '#333'
                            }
                        ]
                    }}
                />

            </div>


            <div className="lg__visible">
                <SmallScreenGraph
                     date={date[date.length - 1]} 
                     cases={cases[cases.length - 1]}
                     decrease={decrease[decrease.length - 1]}
                     recovered={recovered[recovered.length - 1]}
                     day={day[day.length - 1]}
                     firstDose={firstDose[firstDose.length - 1]}
                     secondDose={secondDose[secondDose.length - 1]}
                />
            </div>
        </div>
    )
}

export default Graph
