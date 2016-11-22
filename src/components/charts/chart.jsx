import React from 'react';
import ScatterPlot from './scatter/scatter-plot.jsx';
import LineChart from './line/line-chart.jsx';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30
};
const numDataPoints = 50;
const randomNum = () => Math.floor(Math.random() * 1000);
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
};

export default class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: randomDataSet(), chart_type: 'scatter'};
  }
  randomizeData() {
    this.setState({ data: randomDataSet(), chart_type: 'scatter'});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.user_data)
      this.setState({data: nextProps.user_data, chart_type: 'line'});
  }

  render() {
    let chart;
    if(this.state.chart_type == 'scatter') {
      console.log('scatter chart...');
      chart = <ScatterPlot {...this.state} {...styles} />;
    }
    else {
      console.log('line chart...');
      chart = <LineChart {...this.state} {...styles} />;
    }
    return (
      <div>
        {chart}
        <div className="controls">
          <button className="btn randomize" onClick={() => this.randomizeData()}>
            Randomize!
          </button>
        </div>
      </div>
    );
  }
}
