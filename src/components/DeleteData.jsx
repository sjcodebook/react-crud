import React, { Component, Fragment } from 'react';

export class DeleteData extends Component {
  render() {
    const json_data = this.props.data;
    let final_data;

    if (typeof json_data === 'string') {
      final_data = json_data;
    } else {
      final_data = JSON.stringify(json_data);
    }

    return (
      <Fragment>
        <input type='text' id='val' />

        <button
          className='btn btn-warning ml-3'
          onClick={() => this.props.click(document.getElementById('val').value)}
        >
          Submit
        </button>
        <br />
        <br />
        {final_data}
      </Fragment>
    );
  }
}

export default DeleteData;
