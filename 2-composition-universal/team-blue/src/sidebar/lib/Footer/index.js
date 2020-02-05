/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const InlineSVG = require('svg-inline-react').default;

/**
 * Footer Component
 */
const Footer = ({ title, icon, link }) => (
  <a className="mp-footer__card" href={link.href}>
    <div className="mp-footer__icon">
      <InlineSVG src={icon} />
    </div>
    <div className="mp-footer__text">
      { title }
      <span>{ link.text }</span>
    </div>
  </a>
);

/**
 * Footer defaultProps
 */
Footer.defaultProps = {
  title: '',
  icon: '',
  link: null,
};

/**
 * Footer propTypes
 */
Footer.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
};

/**
 * exports Footer
 */
module.exports = Footer;
