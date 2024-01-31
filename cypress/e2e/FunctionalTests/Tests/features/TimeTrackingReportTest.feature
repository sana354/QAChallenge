Feature: Time Tracking Reports Download Verification

Scenario: Downloading Time Tracking Reports
Given I navigate to the time tracking reports page
When I click on the "Downloads" dropdown to download the Excel file
Then verify that the file is downloaded to the designated download folder
