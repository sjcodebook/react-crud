import React, { Component } from 'react';

export class AllData extends Component {
  render() {
    const data = this.props.data;
    return <div>{data}</div>;
  }
}

export default AllData;
