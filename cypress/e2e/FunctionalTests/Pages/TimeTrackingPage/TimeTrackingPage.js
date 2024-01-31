class TimeTrackingPage {

  constructor() {
    this.elements = {
        switchToterminalMode: () => cy.get('[data-e2e-test="open-terminal"]'),
        basicTerminalMode : () => cy.get('#page-time-tracking-terminal-mode-basic-terminal'),
        switchDevicetoTerminalMode: () => cy.get('._l4ddb6z'),
        verificationMessage: ()  =>  cy.get('._cvv7vr6'),
        terminalModeconfirmationButton: () => cy.get('#page-time-tracking-switch-this-device-into-terminal-mode-modal-confirm'),
        terminalModeChangedMessage: () => cy.get(':nth-child(2) > ._7ovu7i > ._cvv7vr6'),
        passwordField: () =>  cy.get('._i8newnu'),
        submitButton: () =>  cy.get('#terminal-signin-submit-button'),
        selectCategory: () => cy.get('#terminal-time-tracking-time-categories-open-button > div'),
        categoryName: () => cy.get('[data-e2e-test="form-control-label-Project A"]'),
        saveButton: () =>cy.get('#terminal-time-tracking-time-categories-save-button'),
        startWorkButton : () => cy.get('#terminal-time-tracking-start-work > span'),
        startBreakButton : () => cy.get('#terminal-time-tracking-start-break'),
        continueWorkButton : () => cy.get('#terminal-time-tracking-start-work'),
        breakAndWorkTime : () => cy.get('._hrm0dc'),
        stopWorkButton: () => cy.get('#terminal-time-tracking-stop-work > span'),
        timeTrackingDone: ()=> cy.get('#terminal-time-tracking-done')
        
      }
}
   LoadingTimeTrackingPage (){
          
    cy.wait(5000)  
    cy.url().should('include','/time-tracking')
  
}
    switchDevicetoBasicTerminalMode (){
           cy.wait(3000);
          this.elements.switchToterminalMode().click();
           this.elements.basicTerminalMode().click({ force: true });
           this.elements.switchDevicetoTerminalMode().click({ force: true });
           cy.wait(2000);
           this.elements.verificationMessage().should('contain','Terminal mode changed successfully');
           this.elements.terminalModeconfirmationButton().click();
           this.elements.verificationMessage().should('contain','Terminal is opening.');
    }

 
      getMessage (confirmationMessage) {
         
      this.elements.terminalModeChangedMessage().invoke('text').then((text1) =>{
            expect(text1.trim()).to.equal(confirmationMessage)
        })
      
    }

     clickSubmit(username) {
        cy.wait(5000);
     
      cy.contains('li._rgains div._16hkuqw', username).then(($element) => {
      expect($element).to.contain(username);
      $element.click();
});
      
       cy.fixture('passwords').then((passwords) => {
        const password = passwords.validpassword;
        this.elements.passwordField().type(password);
        cy.wait(1000);
       this.elements.submitButton().click();     // click submit button
       })
      }

      selectCategory(){
       cy.wait(5000);
       this.elements.selectCategory().click();
       this.elements.categoryName().should('contain', 'Project A').click();
       this.elements.saveButton().click();

      }

       StartWork() {
      
        this.elements.startWorkButton().should('contain', 'Start work').click();
    
      }

      validateClockedInMessage(ClockedInMessage){
        
         this.elements.verificationMessage().invoke('text').then((clockedInmsg) =>{
            expect(clockedInmsg.trim()).to.equal(ClockedInMessage)
        })
      }

      startBreak() {

      this.elements.startBreakButton().should('contain', 'Start break').click();
      }

      validateBreakMessage(breakMessage){
        
        cy.wait(10000)
        this.elements.verificationMessage().invoke('text').then((breakmsg) =>{
        expect(breakmsg.trim()).to.equal(breakMessage)
        })
      }

      continueWork() {
      
        this.elements.continueWorkButton().should('contain', 'Continue work').click();

      }

      calculateBreakAndWorkingTime()
      {

        this.elements.breakAndWorkTime().should('exist').invoke('text').then((text) => {
          expect(text.trim()).to.not.be.empty;
          cy.log('Timer Value:', text);
        });
       
      }

       stopWork() {

        this.elements.stopWorkButton().should('contain', 'Stop work').click();
        this.elements.timeTrackingDone().click();
        cy.wait(8000);

      }

      validateClockedOutMessage (clockedOutMessage) {
       
        this.elements.verificationMessage().invoke('text').then((clockedOutmsg) =>{
        expect(clockedOutmsg.trim()).to.equal(clockedOutMessage)
      })
      }
     
}   
export default TimeTrackingPage;