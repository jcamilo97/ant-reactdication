import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

//componets
import Header from './Layout/header';
import Content from './Layout/content';
import Footer from './Layout/footer';
import './App.css';
import menu from '../common/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="Welcome to app.js" menus={menu}></Header>
        <Content body ={ children }/>
        <Footer copyright="&copy; jcamilo97"></Footer>
      </div>
    );
  }
}

export default App;
