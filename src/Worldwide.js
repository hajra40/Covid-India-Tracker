import React from 'react'
import { Card, MenuItem , Select , FormControl, Table } from '@material-ui/core'
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css"
import InfoBoxs from './worldWideComponents/Components/InfoBoxs';
import Tables from './worldWideComponents/Components/Table';
import { sortData } from './worldWideComponents/Components/util';
import './worldWideComponents/css/App.css'
import Map from './worldWideComponents/Components/Map';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const Worldwide = () => {
    const [countries , setCountries] = useState([]);
    const [country , setCountry] = useState('worldwide');
    const [countryInfo , setCountryinfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
    const [zoom, setZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then (res => res.json())
        .then (data => {
        setCountryinfo(data)
        })
    } , [])

    useEffect(() => {
        const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
            const countries = data.map((country) => ({
            name: country.country, //united states
            value: country.countryInfo.iso2 //uk
            }))

            const sortdata = sortData(data);

            console.log(sortdata , data)
            setTableData(sortdata);
            setCountries(countries)
        })
        .catch((err) => alert(err))
        }

        getCountriesData();
    }, [])

    const onCountryChange = async (event) => {
        setLoading(true);
        const countryCode = event.target.value;
    
        setCountry(countryCode);
    
        const url =
          countryCode === "worldwide"
            ? "https://disease.sh/v3/covid-19/all"
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
        //https://disease.sh/v3/covid-19/all
        //https://disease.sh/v3/covid-19/countries/[countryCode]
    
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setCountry(countryCode);
            setCountryinfo(data);
            setLoading(false);
            countryCode === "worldwide"
              ? setMapCenter([34.80746, -40.4796])
              : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
            setZoom(4);
          });
    
        console.log(countryInfo);
      };

 


    return (
        <div className="worldapp">
            <div className="worldapp__left">
                {/* Header */}
                <div className="worldapp__header">
                    <div>
                        <Link to="/"><ArrowBackIcon /> Return Back </Link>
                        <h1>COVID-19 TRACKER</h1>
                    </div>
                    <FormControl className="worldapp__dropdown">
                        <Select variant="outlined" onChange={onCountryChange} value={country}>
                        <MenuItem value="worldwide">WorldWide</MenuItem>
                        {
                            countries.map((country) => {
                            return <MenuItem key={country.value} value={country.value}>{country.name}</MenuItem>
                            })
                        }
                        </Select>
                    </FormControl>
                </div>
                
                
                <div className="main_card">
                    {/* infoboxs */}
                    <InfoBoxs title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
                    <InfoBoxs title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
                    <InfoBoxs title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
                </div>
                
                {/* map */}
                <Map
                    countries={mapCountries}
                    center={mapCenter}
                    zoom={zoom}
                    casesType={casesType}
                />
            </div>

            <Card className="worldapp__right">
                {/* graph */}
                <h3>Live Cases by Country</h3>
                <Tables countries={tableData} />
            </Card>
        </div>
    )
}

export default Worldwide
