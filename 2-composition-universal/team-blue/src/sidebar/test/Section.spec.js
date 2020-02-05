/* global describe, it */
/* eslint-disable no-unused-expressions */
const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');

const Section = require('../lib/Section');
const SectionLink = require('../lib/SectionLink');

const props = {
  id: 'charge',
  label: 'Cobrar',
  items: [{
    id: 'qrCode',
    label: 'Código QR',
    link: 'http://www.mercadopago.com.ar/qr-code',
    sub_items: [],
    active: false,
  }, {
    id: 'posSellers',
    label: 'Cobros en tu local',
    link: 'http://www.mercadopago.com.ar/collections',
    sub_items: [],
    active: false,
  }, {
    id: 'tools',
    label: 'Botón y link de pago',
    link: 'http://www.mercadopago.com.ar/tools/list',
    sub_items: [
      {
        id: 'subitem1',
        label: 'Suscripciones',
        link: 'http://www.mercadopago.com.ar/subitem1',
        active: false,
      },
      {
        id: 'subitem2',
        label: 'Suscripciones',
        link: 'http://www.mercadopago.com.ar/subitem2',
        active: false,
      },
    ],
    active: false,
  }, {
    id: 'moneyRequest',
    label: 'Solicitar dinero',
    link: 'http://www.mercadopago.com.ar/money-request',
    sub_items: [],
    active: false,
  }],
  disabled: false,
};

describe('<Section />', () => {
  const wrapper = shallow(<Section {...props} />);

  it('should have a label', () => {
    expect(wrapper.find('.mp-section__title').text()).to.equal(props.label);
  });

  it('should set SectionLink props properly', () => {
    const links = wrapper.find(SectionLink);
    links.forEach((link, i) => {
      expect(link.prop('id')).to.equal(props.items[i].id);
      expect(link.prop('label')).to.equal(props.items[i].label);
      expect(link.prop('link')).to.equal(props.items[i].link);
      expect(link.prop('subItems')).to.equal(props.items[i].sub_items);
      expect(link.prop('active')).to.equal(props.items[i].active);
    });
  });

  it('should not have a collapsed section', () => {
    expect(wrapper.find('.mp-section-collapsible')).to.have.length(0);
  });

  it('should have a collapsed section', () => {
    const extraSubItem = [{
      id: 'subscriptions',
      label: 'Suscripciones',
      link: 'http://www.mercadopago.com.ar/suscriptions',
      sub_items: [],
      active: false,
    }];
    wrapper.setProps({
      items: props.items.concat(extraSubItem),
      collapsible: true,
    });
    expect(wrapper.find('.mp-section-collapsible')).to.have.length(1);
  });

  it('should set is-disabled class properly', () => {
    expect(wrapper.find('p').hasClass('mp-section__title')).to.equal(true);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('p').hasClass('mp-section__title is-disabled')).to.equal(true);
  });
});
