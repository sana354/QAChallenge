Feature: Time Tracking Terminal Mode Verification

Scenario: Clocking In and Out - Basic Terminal Operations

Given I am on the time tracking page
When I switch the device into Basic Terminal mode
Then I should a receive confirmation message "Terminal mode changed successfully"
When I provide the valid password for user "Jose Barron TESTING" and click Submit
And I select the time category
And upon clocking in by clicking "START WORK"
Then I should receive a confirmation message stating "You're clocked in on time category: Project A"
When I initiate a break by clicking "START BREAK"
Then I should receive a confirmation message indicating "You're on break"
When I resume my work by clicking "CONTINUE WORK"
Then I should receive a confirmation message stating "You're clocked in on time category: Project A"
And  I verify that the break time is displayed on the screen
When I click on the "START BREAK" button to reinitiate a break
Then I verify that the working time is displayed on the screen
When I end my work session by clicking "STOP WORK"
Then I should receive a confirmation message stating "You're clocked out"