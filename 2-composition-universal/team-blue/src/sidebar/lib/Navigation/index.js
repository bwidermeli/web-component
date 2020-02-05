/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');

// Local Components
const Section = require('../Section');
const Footer = require('../Footer');

/**
 * Navigation Component
 */
const Navigation = ({ version, sections, active, footer, locale }) => (
  <div className={classNames('mp-navigation', `mp-navigation--${version}`)} role="navigation">
    {
      sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          label={section.label}
          items={section.items}
          active={active}
          disabled={section.disabled}
          collapsible={(index === 1 && version === 'v2')}
          locale={locale}
        />
      ))
    }
    {
      footer && <div className="mp-footer">
        <Footer
          title={footer.title}
          icon={footer.icon}
          link={footer.link}
        />
      </div>
    }
  </div>
);

/**
 * Navigation defaultProps
 */
Navigation.defaultProps = {
  version: 'v1',
  active: '',
  footer: null,
};

/**
 * Navigation propTypes
 */
Navigation.propTypes = {
  version: PropTypes.string,
  active: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          icon: PropTypes.string,
          label: PropTypes.string,
          link: PropTypes.string,
          subItems: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              label: PropTypes.string,
              link: PropTypes.string,
              active: PropTypes.bool,
              disabled: PropTypes.bool,
            }),
          ),
          active: PropTypes.bool,
          disabled: PropTypes.bool,
        }),
      ).isRequired,
      active: PropTypes.string,
      disabled: PropTypes.bool,
      collapsible: PropTypes.bool,
      locale: PropTypes.string,
    }),
  ).isRequired,
  footer: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
    }),
  }),
  locale: PropTypes.string.isRequired,
};

/**
 * exports Navigation
 */
module.exports = Navigation;
