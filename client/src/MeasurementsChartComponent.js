import React, { Component } from 'react';
import Highcharts from 'highcharts';

import {
  HighchartsChart,
  withHighcharts,
  Chart,
  XAxis,
  YAxis,
  Title,
 // LineSeries,
 // SplineSeries,
 // PlotLine,
 // Tooltip
} from 'react-jsx-highcharts';

class MeasurementsChartComponent extends Component {
    render () {
        const { measurements, goals } = this.props;
        return (
            <div>             
                <HighchartsChart>
                    <Chart />
                    <Title>Blood Pressure, Pulse, and Goals</Title>
                    <XAxis>
                        <XAxis.Title>Date/Time</XAxis.Title>
                    </XAxis>
                    <YAxis>
                        <YAxis.Title>Values</YAxis.Title>
                    </YAxis>
                </HighchartsChart>  
            </div> 
        )
    }
}

export default withHighcharts(MeasurementsChartComponent, Highcharts);