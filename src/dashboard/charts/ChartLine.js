import React from 'react'
import { Bar } from 'react-chartjs-2';

export default function ChartLine (props){

    const { countTypes } = props;
   
    const chartData = {
        labels: countTypes.map(type =>type.typeName),
        datasets: [{
            data: countTypes.map(type =>type.typeCount),
            borderWidth: 1,
            backgroundColor: countTypes.map(type =>`${type.typeColor}33`),
            borderColor: countTypes.map(type =>type.typeColor),
            barThickness: 'flex',
        }]
    }

    const optionsGraphics = {
        //responsive: true,
        maintainAspectRatio: false,
        title: {
            text: "Liczba ciast w kategoriach",
            display: true,
            fontSize: 24,
            fontColor: 'black'
        },
        legend: {
            display: false,
            position: 'bottom',
            align: 'center',
            padding: 10,
            fontColor: 'black'
        },
        tooltips: {
            bodyFontSize: 15,
            displayColors: false
        },
        scales:{yAxes:[{ticks:{beginAtZero:true}}]}
    }

    return (
        <div  style={{paddingTop: '5vh', paddingBottom: '5vh' }}>
            <Bar
                data={chartData}
                height={450}
                options={ optionsGraphics}
            />
        </div>
    )
}
