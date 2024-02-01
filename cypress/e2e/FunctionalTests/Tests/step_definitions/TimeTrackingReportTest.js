/// <reference types="cypress" />

import { Given, When, Then ,And} from 'cypress-cucumber-preprocessor/steps'
import TimeTrackingReportPage from '../../Pages/TimeTrackingReportPage/TimeTrackingReportPage'
const timeTrackingReportPage = new TimeTrackingReportPage();

 before(() => {
    cy.task('deleteFolder', 'cypress/downloads/All_data_01.02.2024_-_29.02.2024.xlsx')
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
   
  

 
