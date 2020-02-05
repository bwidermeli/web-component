/* eslint-disable max-len */
/* global describe, it */
/* eslint-disable no-unused-expressions */
const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');
const InlineSVG = require('svg-inline-react').default;

const SectionLink = require('../lib/SectionLink');

const props = {
  id: 'activities',
  icon: '<svg height="22" width="22" xmlns="http://www.w3.org/2000/svg"></svg>',
  label: 'Actividad',
  link: 'https://www.mercadopago.com.ar/activities',
  subItems: [],
  active: false,
  disabled: false,
};

const propsWithSubitems = {
  id: 'activities',
  icon: '<svg height="22" width="22" xmlns="http://www.w3.org/2000/svg"></svg>',
  label: 'Actividad',
  subItems: [
    {
      id: 'activities2',
      label: 'Actividad 2',
      link: 'http://www.mercadopago.com.ar',
      disabled: false,
    },
  ],
  active: false,
  disabled: false,
};

describe('<SectionLink />', () => {
  describe('when haves subitems', () => {
    const wrapper = shallow(<SectionLink {...propsWithSubitems} />);

    it('should have an icon', () => {
      expect(wrapper.find('.mp-section-link__icon').children().contains(<InlineSVG src={propsWithSubitems.icon} />)).to.equal(true);
    });

    it('must have a className with id', () => {
      expect(wrapper.find('.mp-section-link__icon').hasClass(`mp-section-link__icon nav-icon-${propsWithSubitems.id}`)).to.equal(true);
    });

    it('should have a label', () => {
      expect(wrapper.find('.mp-section-link__text').text()).to.equal(propsWithSubitems.label);
    });

    it('should have a chevron', () => {
      expect(wrapper.find('.mp-section-link__chevron')).to.have.length(1);
    });

    it('should not have a link', () => {
      expect(wrapper.find('a')).to.have.length(0);
    });

    it('should set is-active class properly', () => {
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link')).to.equal(true);
      wrapper.setProps({ active: true });
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link is-active')).to.equal(true);
    });

    it('should set is-disabled class properly', () => {
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link')).to.equal(true);
      wrapper.setProps({ active: false, disabled: true });
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link is-disabled')).to.equal(true);
    });

    it('should have a sublinks container', () => {
      expect(wrapper.find('.mp-section-link__dropdown')).to.have.length(1);
    });
  });

  describe('when not have subitems', () => {
    const wrapper = shallow(<SectionLink {...props} />);

    it('should have an icon', () => {
      expect(wrapper.find('.mp-section-link__icon').children().contains(<InlineSVG src={props.icon} />)).to.equal(true);
    });

    it('must have a className with id', () => {
      expect(wrapper.find('.mp-section-link__icon').hasClass(`mp-section-link__icon nav-icon-${props.id}`)).to.equal(true);
    });

    it('should have a label', () => {
      expect(wrapper.find('.mp-section-link__text').text()).to.equal(props.label);
    });

    it('should have a link', () => {
      expect(wrapper.find('.mp-section-link').prop('href')).to.equal(props.link);
    });

    it('should set is-active class properly', () => {
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link')).to.equal(true);
      wrapper.setProps({ active: true });
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link is-active')).to.equal(true);
    });

    it('should set is-disabled class properly', () => {
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link')).to.equal(true);
      wrapper.setProps({ active: false, disabled: true });
      expect(wrapper.find('.mp-section-link').hasClass('mp-section-link is-disabled')).to.equal(true);
    });

    it('should not have a sublinks container', () => {
      expect(wrapper.find('.mp-section-link__dropdown')).to.have.length(0);
    });
  });
});
