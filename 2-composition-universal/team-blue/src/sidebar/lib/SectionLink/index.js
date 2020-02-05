/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const InlineSVG = require('svg-inline-react').default;
const classNames = require('classnames');

// Local Components
const SectionSubLink = require('../SectionSubLink');

/**
 * Default Activities Icon
 */
const DefaultActivitiesIcon = '<svg height="22" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M18.281 15.815H3.033a.36.36 0 0 0 0 .72H18.28a.36.36 0 0 0 0-.72M17.854 10.509a.739.739 0 0 1-.712-.915.733.733 0 0 1 .496-.525.679.679 0 0 1 .216-.036.739.739 0 1 1 0 1.476M14.24 6.923a.621.621 0 0 1-.202-.029.735.735 0 0 1-.54-.712.74.74 0 1 1 1.484 0 .735.735 0 0 1-.54.713.621.621 0 0 1-.202.028m-6.437 6.43a.739.739 0 1 1-1.447-.202.735.735 0 0 1 .511-.504.621.621 0 0 1 .202-.029.735.735 0 0 1 .706.54c.021.058.028.13.028.195m-4.349-2.844a.739.739 0 0 1 0-1.476.739.739 0 0 1 .72.921.732.732 0 0 1-.504.519.679.679 0 0 1-.216.036m14.4-2.196c-.273 0-.532.08-.756.216L15.493 6.93c.13-.216.209-.475.209-.748a1.463 1.463 0 0 0-2.924 0c0 .273.08.532.21.748L7.81 12.107a1.37 1.37 0 0 0-.741-.209 1.37 1.37 0 0 0-.742.21l-1.613-1.614c.13-.216.202-.46.202-.727 0-.799-.655-1.454-1.462-1.454C2.655 8.313 2 8.968 2 9.767c0 .807.655 1.462 1.454 1.462.281 0 .54-.08.756-.216l1.606 1.598c-.13.216-.209.475-.209.742 0 .806.655 1.461 1.462 1.461.806 0 1.454-.655 1.454-1.461 0-.267-.072-.519-.209-.735l5.184-5.184c.216.137.468.21.742.21.274 0 .526-.073.742-.21l1.612 1.613c-.122.216-.194.461-.194.72 0 .807.655 1.462 1.454 1.462.807 0 1.462-.655 1.462-1.462 0-.799-.655-1.454-1.462-1.454" fill="#9BA9BB" stroke="#9BA9BB" stroke-width=".1"/></g></svg>';

/**
 * SectionLink Component
 */
const SectionLink = ({ id, icon, label, link, subItems, active, layoutActive, disabled }) => {
  // knowledge if exists subitems
  const availableSubItems = Array.isArray(subItems) && subItems.length > 0;
  const commonsClasses = classNames(
    'mp-section-link',
    { 'is-active': active },
    { 'is-disabled': disabled },
  );

  const renderContent = (
    <React.Fragment>
      {
        icon && icon !== '' ?
          <span className={`mp-section-link__icon nav-icon-${id}`}>
            <InlineSVG src={icon} />
          </span>
          :
          <span className={`mp-section-link__icon nav-icon-${id}`}>
            <InlineSVG src={DefaultActivitiesIcon} />
          </span>
      }
      <span className="mp-section-link__text">{ label }</span>
    </React.Fragment>
  );

  // force show when some subitem is active
  const openSectionSublink = (subItems.length > 0) && (subItems.some(subItem => subItem.id === layoutActive));

  return availableSubItems ?
    <div>
      <input
        type="checkbox"
        id={`mp-section-link__toggle-trigger-${id}`}
        className="mp-section-link__input"
        readOnly="readonly"
        checked={openSectionSublink}
      />
      <label
        className={commonsClasses}
        htmlFor={`mp-section-link__toggle-trigger-${id}`}
      >
        { renderContent }
        <span
          className={
            classNames(
              'mp-section-link__chevron',
              { 'is-active': active },
            )
          }
        />
      </label>
      <span className="mp-section-link__dropdown">
        {
          subItems.map((subItem, index) => (
            <SectionSubLink
              key={subItem.id}
              label={subItem.label}
              link={subItem.link}
              active={subItem.id === layoutActive}
              disabled={subItem.disabled}
              className={`mp-section-sublink__${index + 1}`}
            />
          ))
        }
      </span>
    </div>
    :
    <a
      className={commonsClasses}
      href={link}
    >
      { renderContent }
    </a>;
};

/**
 * SectionLink defaultProps
 */
SectionLink.defaultProps = {
  icon: '',
  label: '',
  link: '#',
  active: false,
  layoutActive: '',
  disabled: false,
};

/**
 * SectionLink propTypes
 */
SectionLink.propTypes = {
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
  ).isRequired,
  active: PropTypes.bool,
  layoutActive: PropTypes.string,
  disabled: PropTypes.bool,
};

/**
 * exports SectionLink
 */
module.exports = SectionLink;
