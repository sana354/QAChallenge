class TimeTrackingReportPage {

  constructor() {
    this.elements = {

       timeTrackingReportOption : () =>  cy.get('#navigation-time-tracking-reports > ._5kaapu > ._jj50j2'),
       dropdownOption: () => cy.get('._1wnuba3'),
       excelfileOption: () => cy.get('._1x5ay5u > :nth-child(2)')

    }
  }

    NavigateToTimetrackingReportPage () {
               
                cy.wait(5000)  
                this.elements.timeTrackingReportOption().should('be.visible').click()
                cy.url().should('include','/time-tracking-reports')        
               
}

    downloadReports(){
         
              cy.get('._mw2scw').click() //Refresh data
              this.elements.dropdownOption().should('be.visible').click({ force: true });
              cy.wait(4000);
              this.elements.excelfileOption().should('be.visible').click({ force: true });
              cy.wait(50000);

           
    }

    verifyDownloaded() {

     cy.readFile('cypress/downloads/All_data_01.01.2024_-_31.01.2024.xlsx').should('exist');;
    }
    
}

export default TimeTrackingReportPage;