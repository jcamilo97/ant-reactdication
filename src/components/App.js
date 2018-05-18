import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Layout } from 'antd';
//componets
import RHeader from './Layout/header';
import RContent from './Layout/content';
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
      <Layout>
        <RHeader title="Welcome to app.js" menus={menu}></RHeader>
        <RContent body={children} />
      </Layout>
    );
  }
}

export default App;
