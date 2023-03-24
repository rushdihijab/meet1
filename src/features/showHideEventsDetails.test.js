import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user hasnt clicked the show details button', () => {});

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should not see the events details', () => {
      const eventDetails = AppWrapper.find('.events .event-details');
      expect(eventDetails).toHaveLength(0);

    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the main page is open', async () => {
      EventWrapper = shallow(<Event event={mockData} />);
    });

    when('the user clicks the show details button', () => {
      EventWrapper.find('.show-details-btn').simulate('click');
    });

    then('the user should see the events details', () => {
      const eventDetails = EventWrapper.find('.event .event-details');
      expect(eventDetails).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    given('the user has previously clicked the show details button', () => {
      EventWrapper = shallow(<Event event={mockData} />);
      EventWrapper.find('.show-details-btn').simulate('click');
    });
    when('the user clicks the hide details button', () => {
      EventWrapper.find('.show-details-btn').simulate('click');
    });
    then('the user should not see the events details', () => {
      const eventDetails = EventWrapper.find('.event .event-details');
      expect(eventDetails).toHaveLength(0);
    });
  });
});
