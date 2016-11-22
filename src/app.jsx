import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './scss/index.scss';
import React from 'react';
import Chart from './components/charts/chart.jsx';
import * as Papa from 'papaparse';
import Upload from './components/upload.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_data: []
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload(file_list){
    // get file_list from upload component
    let files_arr = Array.prototype.slice.call(file_list);
    let user_data = [];
    // use Papa to parse/manipulate
    // map each file to the results of Papa.parse on that file
    Papa.parse(files_arr[0], {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          this.setState({user_data: results.data});
        }
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Workout Visualizer</h1>
        <div className="btn-group" role="group" aria-label="Basic example">
          <a href="/" className="btn btn-secondary btn-lg">Reload!</a>
          <Upload onFileUpload={this.handleFileUpload} {...this.state} />
        </div>
        <Chart {...this.state}/>
      </div>
    );
  }
}
