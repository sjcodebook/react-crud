import React, { Component, Fragment } from 'react';

export class PutData extends Component {
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
        <div>
          <br />
          <div className='container'>
            <form onSubmit={this.props.click}>
              <div style={{ width: '30%' }} className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='id'
                  placeholder='id'
                  onChange={this.props.input}
                />
              </div>
              <br />
              <div style={{ width: '30%' }} className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='title'
                  placeholder='title'
                  onChange={this.props.input}
                />
              </div>
              <br />
              <div style={{ width: '30%' }}>
                <button className='btn btn-success' type='submit'>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>

        <br />
        {final_data}
      </Fragment>
    );
  }
}

export default PutData;

{
  /* <input type='text' id='val' />

<button
  className='btn btn-warning ml-3'
  onClick={() => this.props.click(document.getElementById('val').value)}
>
  Submit
</button>
<br />
<br /> */
}
