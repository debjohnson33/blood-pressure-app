import React, { Component } from 'react';
import Highcharts from 'highcharts';
import dateFormat from 'dateformat';

import {
  HighchartsChart,
  withHighcharts,
  Chart,
  XAxis,
  YAxis,
  Title,
 // LineSeries,
  SplineSeries,
  PlotLine,
  Tooltip,
  Legend
} from 'react-jsx-highcharts';

const marker = {
    symbol: 'circle'
}

let yAxis = [];
yAxis.push({
  title: {
    text: "ttitle"
  },
  opposite: false,
  min: 0,
  labels: {
    format: "{value}Wh"
  }
});
// let xAxis = {
//   type: "datetime",
//   dateTimeLabelFormats: {
//     hour: "%l %p",
//     day: "%b %e '%y",
//     week: "%b %e '%y",
//     month: "%b '%y",
//     year: "%y"
//   }
// };

class MeasurementsChartComponent extends Component {
    render () {
        const { measurements, goals } = this.props;
        let systolic_bp = measurements.map((measurement) => {
            return measurement.systolic_bp;
        });
        let diastolic_bp = measurements.map((measurement) => {
            return measurement.diastolic_bp;
        });
        let pulse = measurements.map((measurement) => {
            return measurement.pulse;
        });
        let systolic_goal = goals.systolic_bp;
        let diastolic_goal = goals.diastolic_bp;
        let date_time = measurements.map((measurement) => {
            let formattedDate = dateFormat(measurement.date_time, 'mmm dd, yyyy  h:MM TT');
            return formattedDate;
        })
        return (
            <div>             
                <HighchartsChart>
                    <Chart />
                    <Title>Blood Pressure, Pulse, and Goals</Title>
                    <Legend 
                        layout="vertical"
                        align="left"
                        verticalAlign="top"
                    />
                    <XAxis type="datetime" >
                        <XAxis.Title>Date/Time</XAxis.Title>
                    </XAxis>
                    <Tooltip shared={true} />
                    <YAxis>
                        <YAxis.Title>Values</YAxis.Title>
                        <PlotLine 
                            color= '#FF0000'
                            width= '2'
                            value= {systolic_goal}
                        ></PlotLine>
                        <PlotLine 
                            color= '#FF0000'
                            width= '2'
                            value= {diastolic_goal}
                        ></PlotLine>
                        <SplineSeries
                            name= 'Systolic BP'
                            data= {systolic_bp}
                            marker={marker}
                        ></SplineSeries>
                        <SplineSeries
                            name= 'Diastolic BP'
                            data= {diastolic_bp}
                            marker={marker}
                        ></SplineSeries>
                        <SplineSeries
                            name= 'Pulse'
                            data= {pulse}
                            marker={marker}
                        ></SplineSeries>
                    </YAxis>
                </HighchartsChart>  
            </div> 
        )
    }
}

export default withHighcharts(MeasurementsChartComponent, Highcharts);