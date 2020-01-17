import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';




export default class ChartLine extends Component {
constructor(props){
    super(props);
    this.state = {
        
        chartData: {
        labels: ['VIII 2019','IX 2019', 'X 2019', 'XI 2019', 'XII 2019', 'I 2020'],
        datasets: [{
            label: "liczba użytkowników",
            data: [
                100,
                250,
                500, 
                650,
                1000,
                1230
            ],
            borderColor: "hotpink",
            backgroundColor: 'transparent'
           
        }]
    
    }}
}

    render() {
        return (
            <div  style={{paddingTop: '5vh', paddingBottom: '5vh' }}>
                <Line
                    data={this.state.chartData}
                    height={450}
                    
                    options={
                        { 
                       
                        maintainAspectRatio: false,
                        borderColor:'hotpink',
                        title: {
                            text: "Liczba użytkowników",
                            display: true,
                            fontSize: 30,
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
                        }
                    }
                }
                    />
            </div>
        )
    }
}
