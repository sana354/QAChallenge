/// <reference types="cypress" />

import { Given, When, Then ,And} from 'cypress-cucumber-preprocessor/steps'
import TimeTrackingPage from '../../Pages/TimeTrackingPage/TimeTrackingPage'
const timeTrackingPage = new TimeTrackingPage();


Given ( 'I am on the time tracking page' , () => {
    timeTrackingPage.LoadingTimeTrackingPage();
   
   })

   When ('I switch the device into Basic Terminal mode' ,() => {
    timeTrackingPage.switchDevicetoBasicTerminalMode();
   
})

Then ('I should a receive confirmation message {string}', confirmationMessage => {
    timeTrackingPage.getMessage(confirmationMessage);

})


   When ('I provide the valid password for user {string} and click Submit', username => {
    timeTrackingPage.clickSubmit(username);
   
})

And ('I select the time category',() => {
    timeTrackingPage.selectCategory();
   
})

And ('upon clocking in by clicking "START WORK"',() => {
    timeTrackingPage.StartWork();
   
})

Then ('I should receive a confirmation message stating {string}', ClockedInMessage => {
    timeTrackingPage.validateClockedInMessage(ClockedInMessage);

})

When ('I initiate a break by clicking "START BREAK"', () => {

    timeTrackingPage.startBreak();
})

Then ('I should receive a confirmation message indicating {string}' , breakMessage => {
    timeTrackingPage.validateBreakMessage(breakMessage);

})

When ('I resume my work by clicking "CONTINUE WORK"', () => {
    cy.timetracker();
    timeTrackingPage.continueWork();
})

Then ('Then I should receive a confirmation message stating {string}', ClockedInMessage  => {
    timeTrackingPage.validateClockedInMessage(ClockedInMessage);

})

And ('I verify that the break time is displayed on the screen', () => {
    timeTrackingPage.calculateBreakAndWorkingTime();
})

When ('I click on the "START BREAK" button to reinitiate a break', () => {
    cy.wait(3000) 
    timeTrackingPage.startBreak();
})

Then ('I verify that the working time is displayed on the screen', () => {
    timeTrackingPage.calculateBreakAndWorkingTime();

})

When ('I end my work session by clicking "STOP WORK"' , () => {
    timeTrackingPage.stopWork();
})


 Then ('I should receive a confirmation message stating {string}' , clockedOutMessage =>{

    timeTrackingPage.validateClockedOutMessage(clockedOutMessage);
 })
 



