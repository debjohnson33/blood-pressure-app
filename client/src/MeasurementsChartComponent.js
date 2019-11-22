import React, { Component } from 'react';
import Highcharts from 'highcharts';

import {
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  LineSeries,
  SplineSeries,
  PlotLine,
  Tooltip
} from "react-jsx-highcharts";

class MeasurementsChartComponent extends Component {
    render () {
        const { measurements, goals } = this.props;
        return (
            <div>             
                <HighchartsChart>
                    <Chart />
                    <Title>Blood Pressure, Pulse, and Goals</Title>
                </HighchartsChart>  
            </div> 
        )
    }
}

export default MeasurementsChartComponent;