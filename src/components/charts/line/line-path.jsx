import React from 'react';
import * as d3 from 'd3';

export default class LinePath extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let line = d3.line()
                .x( (d) => { return this.props.xScale(d.date) } )
                .y( (d) => { return this.props.yScale(d.pounds) } );
    // console.log(this.props.lineData);
    let d = line(this.props.lineData);
    return (
      <path d={d}
        stroke="black"
        strokeWidth="1px"
        fill="none"
      />
    )
  }
}
