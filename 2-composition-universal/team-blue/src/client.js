/* globals window */
import BlueBasket from './blue-basket/custom-element';
import SidebarCustom from './sidebar/index.js';
import BlueBuy from './blue-buy/custom-element';

window.blue = { count: 0 };
window.customElements.define('blue-basket', BlueBasket);
//window.customElements.define('sidebar-custom', SidebarCustom);
window.customElements.define('blue-buy', BlueBuy);
