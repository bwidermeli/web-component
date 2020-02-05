/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');
const InlineSVG = require('svg-inline-react').default;

/**
 * Default User Avatar Icon
 */
// eslint-disable-next-line max-len
const DefaultImageLoad = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

// eslint-disable-next-line max-len
const DefaultUserAvatarIcon = '<svg width="50" height="50" viewBox="0 0 50 50"><defs><circle id="ui-avatar__svg-circle" cx="25" cy="25" r="25"></circle><mask id="ui-avatar__svg-mask" width="50" height="50" x="0" y="0" fill="#fff"><use xlink:href="#ui-avatar__svg-circle"></use></mask></defs><g fill="none" fill-rule="evenodd"><use fill="#60C1F8" fill-opacity=".1" stroke="#60C1F8" stroke-width="2.6" mask="url(#ui-avatar__svg-mask)" xlink:href="#ui-avatar__svg-circle"></use><g transform="translate(12 12)"><path fill="#60C1F8" d="M1.005 24.762H.973c-.333-.018-.59-.303-.573-.637.15-2.884 2.533-5.144 5.424-5.144H20.95c2.87 0 5.253 2.246 5.42 5.11.02.333-.234.62-.567.64-.332.026-.62-.236-.64-.57-.13-2.225-1.98-3.97-4.213-3.97H5.824c-2.248 0-4.1 1.758-4.215 4-.02.322-.286.573-.606.573"></path><circle cx="13.363" cy="8.573" r="8.266" fill="#FFF" stroke="#60C1F8" stroke-width="1.21"></circle><path fill="#60C1F8" fill-opacity=".4" d="M21.322 7.213c-.242-1.5-.903-2.863-1.855-3.96-.532-.613-1.145-1.145-1.83-1.573C16.395.906 14.927.455 13.354.455c-3.95 0-7.234 2.83-7.935 6.572.853.12 1.732.186 2.62.186 3.515 0 6.805-.976 9.596-2.678v2.678h3.685z"></path></g></g></svg>';

/**
 * UserMenu Component
 */
const UserMenu = ({ version, avatar, name, profile, help, logout, operator }) => (
  <React.Fragment>
    <input type="checkbox" id="user-menu-check" />
    <div className="mp-user-menu">
      <label id="user-menu-trigger" className="mp-user-menu__header" htmlFor="user-menu-check" role="button">
        <span className="mp-user-menu__avatar">
          { avatar ? <img alt="avatar" data-aload={avatar} src={DefaultImageLoad} /> : <InlineSVG src={DefaultUserAvatarIcon} /> }
        </span>
        <p className="mp-user-menu__name">{ name }</p>
        <span className="mp-user-menu__chevron" />
      </label>
      <div className="mp-user-menu__dropdown" role="navigation">
        { operator &&
          <div className="mp-user-menu__operator-info">
            <p className="mp-user-menu__operator-name">{ operator.name }</p>
            <p className="mp-user-menu__operator-email">{ operator.email }</p>
          </div>
        }
        <a className="mp-user-menu__link" href={profile.link}>{ profile.name }</a>
        {
          version === 'v1' && (
            <React.Fragment>
              { !operator && <hr /> }
              <a className="mp-user-menu__link" href={help.link}>{ help.name }</a>
            </React.Fragment>
          )
        }
        <a className="mp-user-menu__link" href={logout.link}>{ logout.name }</a>
      </div>
    </div>
  </React.Fragment>
);

/**
 * UserMenu defaultProps
 */
UserMenu.defaultProps = {
  version: 'v1',
  avatar: '',
  name: '',
  operator: null,
};

/**
 * linkShape
 */
const linkShape = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

/**
 * UserMenu propTypes
 */
UserMenu.propTypes = {
  version: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  operator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  profile: PropTypes.shape(linkShape).isRequired,
  help: PropTypes.shape(linkShape).isRequired,
  logout: PropTypes.shape(linkShape).isRequired,
};

/**
 * exports UserMenu
 */
module.exports = UserMenu;
