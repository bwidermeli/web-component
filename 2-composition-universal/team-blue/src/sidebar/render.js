
const SidebarCustom = require('./index.js');

window.customElements.define('sidebar-custom', SidebarCustom);

module.exports = function renderSidebar(props) {
  return `<sidebar-custom ${ { ...props } }></sidebar-custom>`
}
