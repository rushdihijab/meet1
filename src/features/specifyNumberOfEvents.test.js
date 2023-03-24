import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When the user hasnt specified a number, 32 is the default number', ({
    given,
    when,
    then,
  }) => {
    given('the user hasnt specified an event', () => {});

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of 32 events', () => {
   
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the main page is open', () => {
      AppWrapper = mount(<App />);
    });

    when(
      'the user enters the number of events they want to see in the input box',
      () => {
        AppWrapper.find('.number').simulate('change', {
          target: { value: 24 },
        });
      }
    );

    then(
      'the user should see the specified number of events in the list',
      () => {
        AppWrapper.update();
        expect(AppWrapper.state('numberOfEvents')).toEqual(24);
      }
    );
  });
});
