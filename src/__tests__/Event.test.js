import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    const event = { mockData }
    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    test('render event summary', () => {
        expect(EventWrapper.find('.event-summary')).toHaveLength(1);
    });

    test('render event date and time', () => {
        expect(EventWrapper.find('.event-date')).toHaveLength(1);
    });

    test('render event location', () => {
        expect(EventWrapper.find('.event-location')).toHaveLength(1);
    });

    test('render show details button', () => {
        expect(EventWrapper.find('.show-details-btn')).toHaveLength(1);
    });

    test('toggle event details when show details button is clicked', () => {
        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);

        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('render event description when show details button is clicked', () => {
        EventWrapper.find('.show-details-btn').simulate('click');
        expect(EventWrapper.find('.event-description')).toHaveLength(1);
    });
});