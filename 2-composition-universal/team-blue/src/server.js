/* eslint-disable no-console */
import express from 'express';
import morgan from 'morgan';
import renderBasket from './blue-basket/render.js';
import renderSidebar from './sidebar/render.js';
import renderBuy from './blue-buy/render.js';
const navigation = require('./sidebar/navigation.json');

const app = express();
app.use(morgan('dev'));
app.use('/blue', express.static('./build'));

app.use('/blue-buy', (req, res) => {
  res.send(renderBuy());
});
app.use('/blue-basket', (req, res) => {
  res.send(renderBasket(0));
});
app.use('/sidebar-custom', (req, res) => {
  const { panelSelector, active, locale } = req.query;
  let props = {
    panelSelector,
    active,
    locale,
    navigation
  };
  res.send(renderSidebar(props));
});

app.listen(3001);
console.log(`🔵  team blue running. fragments are available here:
>> http://127.0.0.1:3001/blue-buy
>> http://127.0.0.1:3001/blue-basket`);
