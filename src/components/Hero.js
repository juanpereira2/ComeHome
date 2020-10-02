import React from "react";
import PropTypes from 'prop-types'

const Hero = ({children, hero}) => {

  return <header className={hero}>{children}</header>;

}

Hero.defaultProps = {
  hero: "defaultHero",
};

Hero.propTypes = {
  hero: PropTypes.string,
  children: PropTypes.element
};

export default Hero;
