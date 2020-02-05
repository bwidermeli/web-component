/* global describe, it */
/* eslint-disable no-unused-expressions */
const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');

const Navigation = require('../lib/Navigation');
const Section = require('../lib/Section');

describe('<Navigation />', () => {
  const props = {
    active: 'activities',
    sections: [{
      id: '',
      label: 'Mi dinero',
      items: [{
        active: true,
        link: 'http://www.mercadopago.com.ar/activities',
        id: 'activities',
        label: 'Actividad',
        disabled: false,
      }, {
        active: false,
        link: 'http://www.mercadopago.com.ar/reports',
        id: 'reports',
        label: 'Informes',
        disabled: false,
      }],
      disabled: false,
    }, {
      id: '',
      label: 'Cobrar',
      items: [{
        active: false,
        link: 'http://www.mercadopago.com.ar/tools/list',
        id: 'tools',
        label: 'Herramientas de cobro',
        disabled: false,
      }, {
        active: false,
        link: 'http://www.mercadopago.com.ar/money-request',
        id: 'moneyRequest',
        label: 'Solicitar dinero',
        disabled: false,
      }],
      disabled: false,
    }],
  };

  const wrapper = shallow(<Navigation {...props} />);

  it('should set Navigation props', () => {
    const sections = wrapper.find(Section);
    sections.forEach((section, i) => {
      expect(section.prop('label')).to.equal(props.sections[i].label);
      expect(section.prop('items')).to.equal(props.sections[i].items);
      expect(section.prop('active')).to.equal(props.active);
    });
  });
});
