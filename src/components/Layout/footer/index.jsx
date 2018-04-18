import React from 'react';
import PropTypes from 'prop-types';
class Footer extends React.Component{
    static propTypes = {
        copyright: PropTypes.string,
    }

    render() {
        const { copyright = '&copy; jcamilo97 2018' } = this.props;
        return (
          <div className="App-footer">
            <a href='https://github.com/jcamilo97' dangerouslySetInnerHTML={{ __html: copyright }}></a>
          </div>
        );
      }
    
}

export default Footer;