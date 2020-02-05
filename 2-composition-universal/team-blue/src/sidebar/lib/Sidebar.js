/* eslint-disable max-len */
/**
 * Module dependencies
 */
const React = require('react');
const PropTypes = require('prop-types');

/**
 * Nordic dependencies
 */
const Script = require('frontend-script');

// Local Components
const UserMenu = require('./UserMenu');
const Navigation = require('./Navigation');

/**
 * Sidebar Component
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.navigation;
  }

  render() {
    // destructuring
    const { active, panelSelector, locale } = this.props;
    const { user, operator, sections, footer, version } = this.state;

    return (
      <nav className="mp-nav slideout-menu slideout-menu-left" role="complementary">

        <UserMenu
          version={version}
          avatar={user.avatar}
          name={user.brandName || user.name}
          operator={operator}
          profile={user.profile}
          help={user.help}
          logout={user.logout}
        />

        <Navigation
          version={version}
          sections={sections}
          active={active}
          footer={footer}
          locale={locale}
        />

        {/* Add necessary scripts */}
        <Script>
          {`
            // slideout.js
            var Slideout=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:false,exports:{}};t[i].call(s.exports,s,s.exports,n);s.l=true;return s.exports}n.m=t;n.c=e;n.i=function(t){return t};n.d=function(t,e,i){if(!n.o(t,e)){Object.defineProperty(t,e,{configurable:false,enumerable:true,get:i})}};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};n.p="";return n(n.s=2)}([function(t,e,n){"use strict";var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function s(t,e,n){var s,o=false;function r(t){s=t;a()}function a(){if(!o){i(h);o=true}}function h(){n.call(t,s);o=false}t.addEventListener(e,r,false);return r}t.exports=s},function(t,e,n){"use strict";function i(){}i.prototype.on=function(t,e){this._collection=this._collection||{};this._collection[t]=this._collection[t]||[];this._collection[t].push(e);return this};i.prototype.once=function(t,e){var n=this;function i(){n.off(t,i);e.apply(this,arguments)}i.listener=e;this.on(t,i);return this};i.prototype.off=function(t,e){var n=this._collection&&this._collection[t],i=0;if(n!==undefined){for(i;i<n.length;i+=1){if(n[i]===e||n[i].listener===e){n.splice(i,1);break}}if(n.length===0){this.removeAllListeners(t)}}return this};i.prototype.removeAllListeners=function(t){this._collection=this._collection||{};delete this._collection[t];return this};i.prototype.listeners=function(t){this._collection=this._collection||{};return this._collection[t]};i.prototype.emit=function(){if(this._collection===undefined){return this}var t=[].slice.call(arguments,0),e=t.shift(),n=this._collection[e],i=0,s;if(n){n=n.slice(0);s=n.length;for(i;i<s;i+=1){n[i].apply(this,t)}}return this};t.exports=i},function(t,e,n){"use strict";var i=n(0);var s=n(1);var o="slideout-panel";var r="slideout-menu";var a="slideout-open";var h="-webkit-transform";var c="-webkit-transition";var u;var l=false;var f=document.documentElement;var d=navigator.msPointerEnabled;var p={start:d?"MSPointerDown":"touchstart",move:d?"MSPointerMove":"touchmove",end:d?"MSPointerUp":"touchend"};function _(t,e){for(var n in e){if(e[n]){t[n]=e[n]}}return t}function m(t,e){t.prototype=_(t.prototype||{},e.prototype)}function v(t){while(t.parentNode){if(t.getAttribute("data-slideout-ignore")!==null){return t}t=t.parentNode}return null}function y(t){t=t||{};this._startOffsetX=0;this._currentOffsetX=0;this._opening=false;this._moved=false;this._opened=false;this._preventOpen=false;this.panel=t.panel;this.menu=t.menu;this.itemToMove=t.itemToMove==="panel"?this.panel:this.menu;this.dimmer=document.querySelector(".slideout-dimmer");this._touch=t.touch===undefined?true:t.touch&&true;this._side=t.side||"left";this._easing=t.fx||t.easing||"ease";this._duration=parseInt(t.duration,10)||300;this._tolerance=parseInt(t.tolerance,10)||70;this._padding=this._translateTo=parseInt(t.padding,10)||256;this._orientation=this._side==="right"?-1:1;this._translateTo*=this._orientation;this._grabWidth=parseInt(t.grabWidth,10)||Math.round(f.clientWidth/3);if(!this.panel.classList.contains(o)){this.panel.classList.add(o)}if(!this.panel.classList.contains(o+"-"+this._side)){this.panel.classList.add(o+"-"+this._side)}if(!this.menu.classList.contains(r)){this.menu.classList.add(r)}if(!this.menu.classList.contains(r+"-"+this._side)){this.menu.classList.add(r+"-"+this._side)}var e=this;this._closeByDimmer=function(t){if(e._opened){t.preventDefault();t.stopPropagation();e.close()}};if(this._touch){this._initTouchEvents()}}m(y,s);y.prototype.open=function(){var t=this;this.emit("beforeopen");if(!f.classList.contains(a)){f.classList.add(a)}this._addTransition();this._translateXTo(this._translateTo);this.panel.addEventListener("click",this._closeByDimmer,true);this._opened=true;setTimeout(function(){t._removeTransition();t.emit("open")},this._duration+50);return this};y.prototype.close=function(){var t=this;if(!this.isOpen()&&!this._opening){return this}this.emit("beforeclose");this._addTransition();this._translateXTo(0);this.panel.removeEventListener("click",this._closeByDimmer);this._opened=false;setTimeout(function(){f.classList.remove(a);t.itemToMove.style[h]=t.itemToMove.style.transform=null;t._removeTransition();t.emit("close")},this._duration+50);return this};y.prototype.toggle=function(){return this.isOpen()?this.close():this.open()};y.prototype.isOpen=function(){return this._opened};y.prototype._translateXTo=function(t){this._currentOffsetX=t;this.itemToMove.style[h]=this.itemToMove.transform="translateX("+t+"px)";this.dimmer.style.opacity=(Math.abs(t)/this.menu.offsetWidth).toFixed(4);return this};y.prototype._addTransition=function(){this.itemToMove.style[c]=h+" "+this._duration+"ms "+this._easing;this.itemToMove.style.transition="transform "+this._duration+"ms "+this._easing;this.dimmer.style[c]=this.dimmer.style.transition="opacity "+this._duration+"ms "+this._easing;return this};y.prototype._removeTransition=function(){this.itemToMove.style.transition=this.itemToMove.style[c]=null;this.dimmer.style.transition=this.dimmer.style[c]=null;this.dimmer.style.opacity=null;return this};y.prototype._initTouchEvents=function(){var t=this;this._onScrollFn=i(document,"scroll",function(){if(!t._moved){clearTimeout(u);l=true;u=setTimeout(function(){l=false},250)}});this._preventMove=function(e){if(t._moved){e.preventDefault()}};document.addEventListener(p.move,this._preventMove);this._resetTouchFn=function(e){if(typeof e.touches==="undefined"){return}t._moved=false;t._opening=false;t._startOffsetX=e.touches[0].pageX;var n=t._startOffsetX;if(t._side==="right"){n=f.clientWidth-t._startOffsetX}t._preventOpen=!t._touch||this===t.panel&&n>t._grabWidth};this.panel.addEventListener(p.start,this._resetTouchFn);this.menu.addEventListener(p.start,this._resetTouchFn);this._onTouchCancelFn=function(){t._moved=false;t._opening=false};this.panel.addEventListener("touchcancel",this._onTouchCancelFn);this.menu.addEventListener("touchcancel",this._onTouchCancelFn);this._onTouchEndFn=function(){if(t._moved){t.emit("translateend");t._opening&&Math.abs(t._currentOffsetX)>t._tolerance?t.open():t.close()}t._moved=false};this.panel.addEventListener(p.end,this._onTouchEndFn);this.menu.addEventListener(p.end,this._onTouchEndFn);this._onTouchMoveFn=function(e){if(l||t._preventOpen||typeof e.touches==="undefined"||v(e.target)){return}var n=e.touches[0].clientX-t._startOffsetX;var i=t._currentOffsetX=n;if(Math.abs(i)>t._padding){return}if(Math.abs(n)>20){t._opening=true;var s=n*t._orientation;if(t._opened&&s>0||!t._opened&&s<0){return}if(!t._moved){t.emit("translatestart")}if(s<=0){i=n+t._padding*t._orientation;t._opening=false}if(!(t._moved&&f.classList.contains(a))){f.classList.add(a)}t._translateXTo(i);t.emit("translate",i);t._moved=true}};this.panel.addEventListener(p.move,this._onTouchMoveFn);this.menu.addEventListener(p.move,this._onTouchMoveFn);return this};y.prototype.enableTouch=function(){this._touch=true;return this};y.prototype.disableTouch=function(){this._touch=false;return this};y.prototype.destroy=function(){this.close();document.removeEventListener(p.move,this._preventMove);this.panel.removeEventListener(p.start,this._resetTouchFn);this.panel.removeEventListener("touchcancel",this._onTouchCancelFn);this.panel.removeEventListener(p.end,this._onTouchEndFn);this.panel.removeEventListener(p.move,this._onTouchMoveFn);document.removeEventListener("scroll",this._onScrollFn);this.open=this.close=function(){};return this};t.exports=y}]);
            var nav = document.querySelector('.mp-nav');
            var navIcon = document.querySelector('.mp-header__header-navicon');
            var slideout = new Slideout({
              'panel': document.querySelector('${panelSelector}'),
              'menu': nav,
              'itemToMove': 'menu',
              'padding': nav.offsetWidth,
              'tolerance': 70,
            });
            if (navIcon) {
              navIcon.addEventListener('click', function() {
                slideout.toggle();
              });
            }
            if (nav) {
              nav.addEventListener('click', function(eve) {
                if (eve.target.nodeName === 'A') {
                  slideout.close();
                }
              }, false);
            }
          `}
        </Script>
      </nav>
    );
  }
}

/**
 * Sidebar defaultProps
 */
Sidebar.defaultProps = {
  active: '',
};

/**
 * Sidebar propTypes
 */
Sidebar.propTypes = {
  panelSelector: PropTypes.string.isRequired,
  active: PropTypes.string,
  locale: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    user: PropTypes.shape(UserMenu.propTypes).isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool,
        link: PropTypes.string,
        id: PropTypes.string.isRequired,
        icon: PropTypes.string,
        label: PropTypes.string,
        disabled: PropTypes.bool,
      }),
    ).isRequired,
    operator: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    footer: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.shape({
        text: PropTypes.string,
        href: PropTypes.string,
      }),
    }),
    locale: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * exports Sidebar
 */
module.exports = Sidebar;
