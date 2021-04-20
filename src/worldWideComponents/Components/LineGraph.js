// import { Line } from 'react-chartjs-2'
// import React from 'react'
// import numeral from 'numeral'

// const options = {
//     legend: {
//         display: false
//     },
//     elements : {
//         point: {
//             radius: 0
//         }
//     },
//     maintainAspectRatio: false,tooltips: {
//         mode: "index",
//         intersect: false,
//         callbacks: {
//             label: function( tooltipItem , data ) {
//                 return numeral(tooltipItem.format("+0.0"))
//             }
//         }
//     },
//     scales: {
//         xAxes: [
//             {
//                 type: "time",
//                 time: {
//                     format: "MM/DD/YY",
//                     tooltipItem: "ll"
//                 }
//             }
//         ],
//         yAxes: [
//             {
//                 gridLines: {
//                     display: false
//                 },
//                 ticks: {
//                     callback: function
//                 }
//             }
//         ]
//     }
// }

// const LineGraph = () => {
//     const [data , setData] = useState({});

//     useEffect(() => {
//         fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
//         .then( res => res.json())
//         .then(data => {
//             const chartData = buildChartData(data);
//             setData(chartData)
//         })
//     }, []);

//     const buildChartData = (data , casesType="cases") => {
//         const chartData = [];
//         let lastDataPoint;

//         for(let date in data.cases) {
//             if(lastDataPoint) {
//                 const newDataPoint = {
//                     x: date,
//                     y: date[casesType][date] - lastDataPoint
//                 }
//                 chartData.push(newDataPoint);
                
//             }
//             lastDataPoint = data['cases'][date];
//         }

//         return chartData;
//     }

//     return (
//         <div>
//             <Line data={{
//                 datasets: [{
//                     backgroundColor: "rgba(204,16,52,0.1)",
//                     borderColor: "#cc1034",
//                     data: data
//                 }]
//             }} options />
//         </div>
//     )
// }

// export default LineGraph
