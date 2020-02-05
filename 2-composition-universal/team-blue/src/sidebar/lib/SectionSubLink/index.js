/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

/**
 * SectionSubLink Component
 */
const SectionSubLink = ({ label, link, active, disabled, className }) => (
  <a
    className={
      classNames(
        'mp-section-sublink',
        className,
        { 'is-active': active },
        { 'is-disabled': disabled },
      )
    }
    href={link}
  >
    <span className="mp-section-sublink__text">{ label }</span>
  </a>
);

/**
 * SectionSubLink defaultProps
 */
SectionSubLink.defaultProps = {
  label: '',
  link: '#',
  active: false,
  disabled: false,
  className: '',
};

/**
 * SectionSubLink propTypes
 */
SectionSubLink.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * exports SectionSubLink
 */
module.exports = SectionSubLink;
