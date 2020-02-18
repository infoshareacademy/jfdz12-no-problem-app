import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';


export default class ChartPie extends Component {
constructor(props){
    super(props);
    this.state = {
        
        chartData: {
        labels: [props.first3City[0][0],props.first3City[1][0] , props.first3City[2][0], 'inne'],
        datasets: [{
            label: "liczba cukierników",
            data: [
                props.first3City[0][1], 
                props.first3City[1][1] , 
                props.first3City[2][1],
                props.otherSum
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
    
    }}
}

    render() {
    
        return (
            <div  style={{paddingTop: '5vh', paddingBottom: '5vh' }}>
                <Pie
                    data={this.state.chartData}
                    height={450}
                                    
                    options={
                        { 
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
                }
                    />
            </div>
        )
    }
}
