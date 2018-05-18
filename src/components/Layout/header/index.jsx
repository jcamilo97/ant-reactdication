import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import logo from '../../../assets/logo.svg';
import './header.css';
const {Header } = Layout;

class RHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    console.log("props header ", this.props);
    const { title, menus } = this.props;
    return (
      <Header className="header">        
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}
          >
            {
              menus && menus.map(
                (item, key) => <Menu.Item key={key}> <Link to={item.url}>{item.title}</Link></Menu.Item>)
            }
          </Menu>
          <h1 className="App-title">{title}</h1>
      </Header>    
    );
  }
}

export default RHeader;
