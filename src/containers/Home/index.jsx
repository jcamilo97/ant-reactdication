import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    isMobile: PropTypes.bool
  };

  render() {
    const { isMobile } = this.props;
    console.log("props home",this.props);
    return (
      <div className="about">
        <h1>page Home</h1>  

        <p>
          { isMobile ? 'Mobile device': 'desktop device'}
        </p>          
      </div>
        );
    }
}

export default connect( state => ({
  isMobile: state.device.isMobile 
}), null)(Home);