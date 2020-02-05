import react from 'react';
import ReactDOM from 'react-dom';
const Sidebar = require('./lib/Sidebar');
import retargetEvents from 'react-shadow-dom-retarget-events';

class SidebarCustom extends HTMLElement {
  mountPoint;
  componentAttributes = {};
  componentProperties = {};
  
  connectedCallback() {
    this.mountReactApp();
  }
  
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
  
  static get observedAttributes() {
    return ['panelSelector', 'active', 'navigation', 'locale'];
  }
  
  attributeChangedCallback(name, oldVal, newVal) {
    this.componentAttributes[name] = newVal;

    this.mountReactApp();
  }
  
  get menuItems() {
    return this.componentProperties.menuItems;
  }
  
  set menuItems(newValue) {
    this.componentProperties.menuItems = newValue;
    
    this.mountReactApp();
  }
  
  reactProps() {
    return {...this.componentAttributes, ...this.componentProperties };
  }
  
  mountReactApp() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
      retargetEvents(this);
    }
    
    ReactDOM.render(<Sidebar { ...this.reactProps() } />, this.mountPoint);
  }
}

module.exports = SidebarCustom;
