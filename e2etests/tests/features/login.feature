Feature: test login functionnality2

Scenario: test login functionnality2
Given User is on login page
When User enter login details
Then Home page should be displayed
When Upon logout
Then Logout should be successfull