import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';
import Chart from './components/charts/chart.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Workout Visualizer</h1>
        <p><a href="/" className="btn btn-primary btn-lg">Reload!</a></p>
        <Chart/>
      </div>
    );
  }
}
