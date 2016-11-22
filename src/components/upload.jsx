import React from 'react';

export default class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload() {
    this.props.onFileUpload(this.refs.file_input.files);
    this.refs.file_input.value = "";
  }

  render(){
    return (
      <label style={{marginBottom: '0px'}} className="btn btn-secondary btn-lg">
        Upload File
        <input
          style={{display:'none'}}
          ref="file_input"
          type="file"
          id="files"
          name="files[]"
          onChange={this.handleFileUpload}
          onClick={() => {this.value = "";}}
          multiple
        />
      </label>
    );
  }
}
