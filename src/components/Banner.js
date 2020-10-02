import React from "react";
import PropTypes from 'prop-types';

const Banner = ({ children, title, subtitle }) => {

  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );

}

Banner.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Banner;
