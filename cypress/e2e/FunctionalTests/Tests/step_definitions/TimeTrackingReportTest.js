/// <reference types="cypress" />
//const fs = require('fs');

import { Given, When, Then ,And} from 'cypress-cucumber-preprocessor/steps'
import TimeTrackingReportPage from '../../Pages/TimeTrackingReportPage/TimeTrackingReportPage'
const timeTrackingReportPage = new TimeTrackingReportPage();

 before(() => {
    cy.task('deleteFolder', 'cypress/downloads/All_data_01.01.2024_-_31.01.2024.xlsx')
    cy.fixture('login_credentials').then(credentials => {
    cy.login(credentials.username, credentials.password);
})
  });

Given ( 'I navigate to the time tracking reports page' , () => {

    timeTrackingReportPage.NavigateToTimetrackingReportPage()
    
   
   })

   When ('I click on the "Downloads" dropdown to download the Excel file', () => {
    timeTrackingReportPage.downloadReports();

   })

   Then ('verify that the file is downloaded to the designated download folder' , () => {
     timeTrackingReportPage.verifyDownloaded();
  });
   
  

 
