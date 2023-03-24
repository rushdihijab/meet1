Feature: Show/Hide events details

Scenario: An event element is collapsed by default
Given the user hasnt clicked the show details button
When the user opens the app
Then the user should not see the events details

Scenario: User can expand an event to see its details
Given the main page is open
When the user clicks the show details button
Then the user should see the events details

Scenario: User can collapse an event to hide its details
Given the user has previously clicked the show details button
When the user clicks the hide details button
Then the user should not see the events details