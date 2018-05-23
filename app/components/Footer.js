import React from 'react';
import PropTypes from 'prop-types';


const Footer = (props) => <footer>
  <span>{props.appName}</span>
</footer>;

Footer.propTypes = {
  appName: PropTypes.String
};

export default Footer;
