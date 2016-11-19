import React from 'react';
import * as d3 from 'd3';
import DataCircles from './data-circles.jsx';
import XYAxis from './x-y-axis.jsx';

const xMax = (data) => d3.max(data, (d) => d[0]);

const yMax = (data) => d3.max(data, (d) => d[1]);

const xScale = (props) => {
  return d3.scaleLinear()
      .domain([0, xMax(props.data)])
      .range([props.padding, props.width - props.padding *2]);
};

const yScale = (props) => {
  return d3.scaleLinear()
      .domain([0, yMax(props.data)])
      .range([props.height - props.padding, props.padding]);
};

const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props)};
  return Object.assign({}, props, scales);
};

export default class ScatterPlot extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const d3Props = marshalProps(this.props);
    return (
      <svg width={d3Props.width} height={d3Props.height}>
        <DataCircles {...d3Props} />
        <XYAxis {...d3Props} />
      </svg>
    )
  }
}
