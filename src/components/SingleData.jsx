import React, { Component, Fragment } from 'react';

export class SingleData extends Component {
  render() {
    console.log(this.props.data);

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

        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>id: {this.props.data.id}</h5>
            <p className='card-text'>title: {this.props.data.title}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SingleData;
