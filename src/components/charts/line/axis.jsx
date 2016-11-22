import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  renderAxis() {
    let node = this.refs.axis;
    if(this.props.orient === 'bottom')
      d3.select(node).call(d3.axisBottom(this.props.scale).ticks(5));
    if(this.props.orient === 'left')
      d3.select(node).call(d3.axisLeft(this.props.scale).ticks(5));
  }
  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}
