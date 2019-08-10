import React, { Component, Fragment } from 'react';
import ip from './config/endpoints/index';
import 'whatwg-fetch';
import { Switch, Route } from 'react-router-dom';
import AllData from './components/AllData';
import SingleData from './components/SingleData';
import PostData from './components/PostData';
import DeleteData from './components/DeleteData';
import PutData from './components/PutData';

export class App extends Component {
  state = {
    data: [],
    id: '',
    title: ''
  };

  componentDidMount() {
    fetch(ip + '/api/data')
      .then(response => {
        return response.text();
      })
      .then(data => {
        this.setState({ data });
      });
  }

  singleDataHandler = val => {
    fetch(ip + `/api/data/${val}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          id: data[0].id,
          title: data[0].title
        });
      });
  };

  deleteDataHandler = val => {
    fetch(ip + `/api/data/${val}`, {
      method: 'DELETE'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data.data
        });
      });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postDataHandler = e => {
    e.preventDefault();
    const { id, title } = this.state;
    const book = {
      id,
      title
    };

    fetch(ip + `/api/data/`, {
      method: 'POST',
      body: JSON.stringify({ id: book.id, title: book.title }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data
        });
      });
  };

  putDataHandler = e => {
    e.preventDefault();
    const { id, title } = this.state;
    const book = {
      id,
      title
    };

    fetch(ip + `/api/data/${book.id}`, {
      method: 'PUT',
      body: JSON.stringify({ id: book.id, title: book.title }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data
        });
      });
  };

  render() {
    return (
      <Fragment>
        <div>
          <a href='/all'>
            <button className='btn btn-primary mr-3'>
              click here for all data
            </button>
          </a>

          <a href='/single'>
            <button className='btn btn-primary mr-3'>
              click here for single data
            </button>
          </a>

          <a href='/delete'>
            <button className='btn btn-primary mr-3'>
              click here for delete data
            </button>
          </a>

          <a href='/put'>
            <button className='btn btn-primary mr-3'>
              click here for update data
            </button>
          </a>

          <a href='/post'>
            <button className='btn btn-primary mr-3'>
              click here for post data
            </button>
          </a>
          <br />
          <br />
        </div>
        <Switch>
          <Route
            exact
            path='/all'
            render={props => <AllData data={this.state.data} />}
          />
          <Route
            exact
            path='/single'
            render={props => (
              <SingleData click={this.singleDataHandler} data={this.state} />
            )}
          />
          <Route
            exact
            path='/delete'
            render={props => (
              <DeleteData
                click={this.deleteDataHandler}
                data={this.state.data}
              />
            )}
          />
          <Route
            exact
            path='/post'
            render={props => (
              <PostData
                input={this.handleInputChange}
                click={this.postDataHandler}
                data={this.state.data}
              />
            )}
          />
          <Route
            exact
            path='/put'
            render={props => (
              <PutData
                input={this.handleInputChange}
                click={this.putDataHandler}
                data={this.state.data}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
