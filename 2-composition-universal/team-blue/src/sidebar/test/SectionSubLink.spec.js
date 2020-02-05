/* global describe, it */
/* eslint-disable no-unused-expressions */
const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');

const SectionSubLink = require('../lib/SectionSubLink');

describe('<SectionSubLink />', () => {
  const props = {
    id: 'activities',
    label: 'Actividad',
    link: 'http://www.mercadopago.com.ar',
    active: true,
    disabled: false,
  };
  const wrapper = shallow(<SectionSubLink {...props} />);

  it('should have a label', () => {
    expect(wrapper.find('.mp-section-sublink__text').text()).to.equal(props.label);
  });

  it('should have a link', () => {
    expect(wrapper.find('.mp-section-sublink').prop('href')).to.equal(props.link);
  });

  it('should set is-active class properly', () => {
    expect(wrapper.find('a').hasClass('mp-section-sublink is-active')).to.equal(true);
    wrapper.setProps({ active: false });
    expect(wrapper.find('a').hasClass('mp-section-sublink')).to.equal(true);
  });

  it('should set is-disabled class properly', () => {
    expect(wrapper.find('a').hasClass('mp-section-sublink')).to.equal(true);
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('a').hasClass('mp-section-sublink is-disabled')).to.equal(true);
  });
});
