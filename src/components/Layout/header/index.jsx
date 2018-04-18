import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import './header.css';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    console.log("props header ",this.props);
    const {title, menus} = this.props;
    return (
      <div className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <ul className="Navigation">
          {
            menus && menus.map(
            (item, key) => <li key={key}> <Link to={item.url}>{item.title}</Link></li>)
          }
        </ul>
      </div>
    );
  }
}

export default Header;
