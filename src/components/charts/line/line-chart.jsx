import React from 'react';
import * as d3 from 'd3';
import LinePath from  './line-path.jsx';
import XYAxis from './x-y-axis.jsx';

const yMax = (data) => d3.max(data, (d) => d.Pounds);

const xScale = (props) => {
  return d3.scaleTime()
      .domain( d3.extent( props.data, (d) => { return parseDate(d.Date); } ) )
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

const parseDate = d3.timeParse('%m/%d/%Y');

export default class LineChart extends React.Component {
  constructor(props){
    super(props);
  }

  // should output line data for each exercise
  //  [{
  //    name: exercise_name,
  //    data: [[date, pounds], [date, pounds]]
  //  }]
  massageData(data) {
    let line_data = [];
    let weighted_exercises_by_name = {};
    // remove anything with no Pounds and get exercises by name
    data.forEach((exercise) => {
      if(exercise.Pounds != '') {
        weighted_exercises_by_name[exercise.Exercise] ?
          weighted_exercises_by_name[exercise.Exercise].push(exercise) :
            weighted_exercises_by_name[exercise.Exercise] = [exercise];
      }
    });
    // go through exercise by name sets
    Object.keys(weighted_exercises_by_name).map((w_e_key) => {
      let single_exercise_arr = weighted_exercises_by_name[w_e_key];
      // for each exercise by this name, get date and pounds and create line data
      let exercise_data = single_exercise_arr.map((e) => {
        return {
          date: parseDate(e.Date),
          pounds: e.Pounds
        };
      });
      line_data.push({
        name: w_e_key,
        data: exercise_data
      });
    });
    return line_data;
  }

  render() {
    const d3Props = marshalProps(this.props);
    let line_path_data = this.massageData(d3Props.data);
    let line_paths = line_path_data.map((lpd) => {
      return <LinePath {...d3Props} key={lpd.name} lineData={lpd.data}/>;
    });
    return (
      <svg width={d3Props.width} height={d3Props.height}>
        {line_paths}
        <XYAxis {...d3Props} />
      </svg>
    )
  }
}
