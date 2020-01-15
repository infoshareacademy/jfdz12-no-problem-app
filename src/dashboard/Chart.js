import React, { Component } from 'react'
import { Pie, Bar } from 'react-chartjs-2';

export default class Chart extends Component {
constructor(props){
    super(props);
    this.state = {
        
        chartData: {
        labels: ["z glutenem", "bez glutenu"],
        datasets: [{
            label: "Gluten",
            data: [
                25, 
                38
            ],
            backgroundColor: [
                "pink",
                "orange"
            ]
        }]
    
    }}
}

    render() {
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    options={
                        { 
                        maintainAspectRatio: false,
                        title: {
                            text: "Dla glutenowców",
                            display: true,
                            fontSize: 40
                        },
                        legend: {
                            display: true,
                            position: 'left'
                        }
                    }
                }
                    />
            </div>
        )
    }
}
