/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const Dictionary = require('./dictionary');


// Local Components
const SectionLink = require('../SectionLink');

/**
 * Section Component
 */
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.dictionary = new Dictionary(props.locale);
  }

  render() {
    const { id, label, items, active, disabled, collapsible } = this.props;
    const isCollapsible = collapsible && items.length > 4;

    // force show when item
    // is active and position in > 4
    const showNonCollapsible = items && items.some((item, index) => (item.id === active && index + 1 > 4));

    return (
      <div className="mp-section">
        <input
          type="checkbox"
          id={`mp-section-collapsible__toggle-trigger-${id}`}
          className="mp-section-collapsible__input"
          readOnly="readonly"
          checked={showNonCollapsible}
        />
        <div className={classNames('mp-section__content', { 'is-overflow': isCollapsible })}>
          {
            label && <p className={classNames('mp-section__title', { 'is-disabled': disabled })}>{ label }</p>
          }
          {
            items && items.map(item => (
              <SectionLink
                key={item.id}
                id={item.id}
                icon={item.icon}
                label={item.label}
                link={item.link}
                subItems={item.sub_items ? item.sub_items : []}
                disabled={item.disabled}
                active={item.id === active}
                layoutActive={active}
              />
            ))
          }
        </div>
        { isCollapsible && (
          <label
            className="mp-section-collapsible"
            htmlFor={`mp-section-collapsible__toggle-trigger-${id}`}
          >
            <span className="mp-section-collapsible__text collapsible-more">
              { this.dictionary.getTranslation('Ver más') }
            </span>
            <span className="mp-section-collapsible__text collapsible-less">
              { this.dictionary.getTranslation('Ver menos') }
            </span>
            <span className="mp-section-collapsible__chevron" />
          </label>
        ) }
        <hr className="mp-section__border" />
      </div>
    );
  }
}

/**
 * Section defaultProps
 */
Section.defaultProps = {
  label: '',
  active: '',
  disabled: false,
  collapsible: false,
};

/**
 * Section propTypes
 */
Section.propTypes = {
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
      layoutActive: PropTypes.string,
      disabled: PropTypes.bool,
      hidden: PropTypes.bool,
    }),
  ).isRequired,
  active: PropTypes.string,
  disabled: PropTypes.bool,
  collapsible: PropTypes.bool,
  locale: PropTypes.string.isRequired,
};

/**
 * exports Section
 */
module.exports = Section;
