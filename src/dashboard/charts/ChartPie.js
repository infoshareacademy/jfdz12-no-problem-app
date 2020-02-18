import React from 'react'
import { Pie } from 'react-chartjs-2';


export default function ChartPie ({first3City, otherSum}) {


    const chartData = {
        labels: [
                    `${first3City[0][0]} ${first3City[0][1]}`,
                    `${first3City[1][0]} ${first3City[1][1]}` , 
                    `${first3City[2][0]} ${first3City[2][1]}` , 
                    `INNE MIASTA ${otherSum}` ,
        ],
        datasets: [{
            label: "liczba cukierników",
            data: [
                first3City[0][1], 
                first3City[1][1] , 
                first3City[2][1],
                otherSum
            ],
            backgroundColor: [
                "hotpink",
                "orange",
                'green',
                'blue'
            ],
            
            hoverBorderWidth: 5,
            hoverBorderColor: 'white'
        }]
    }

    const optionsGraphics = { 
        layout: {
                padding: {
                    left: 50,
                }},
        maintainAspectRatio: false,
        
        title: {
            text: "Cukiernicy według miast",
            display: true,
            fontSize: 30,
            fontColor: 'black'
        },
        legend: {
            display: true,
            position: 'bottom',
            align: 'center',
            padding: 10,
            fontColor: 'black'
        },
        tooltips: {
            bodyFontSize: 15,
            displayColors: false
        }
    }

    return (
        <div  style={{paddingTop: '5vh', paddingBottom: '5vh' }}>
            <Pie
                data={chartData}
                height={450}
                options={optionsGraphics}
            />
        </div>
    )
}
