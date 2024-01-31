### Assignment


### Test Cases/flows that are implemented:
* Downloading Time Tracking Reports
* Verify that the file is downloaded to the designated download folder
* Switching to Basic Terminal mode
* Clock In - START WORK
* Initiate START BREAK
* Resuming work "CONTINUE WORK"
* Multiple breaks in between
* Clock Out- "STOP WORK"
* Assertions and verification of each and every changed state


### Technical Stack

* Programming Language: JavaScript
* Tool: Cypress
* IDE: Visual Studio Code (VSC)
* Framework: Cucumber BDD
* Design Pattern: Page Object Model (POM)


### Execution of tests

There are 2 ways one can execute test cases:

1. Headed Mode
* IDE Terminal run command "npx cypress open"
* Choose your desired browser to run specs
* Select/Click "Run 2 specs" in order to run all the specs/tests

2. Headless mode: 
* Run "npx cypress run --headless"

***PLEASE NOTE: The test cases are running smoothly by using any of the above ways.***