Feature: Specify number of events

Scenario: When the user hasnt specified a number, 32 is the default number
Given the user hasnt specified an event
When the user opens the app
Then the user should see a list of 32 events

Scenario: User can change the number of events they want to see
Given the main page is open
When the user enters the number of events they want to see in the input box
Then the user should see the specified number of events in the list
