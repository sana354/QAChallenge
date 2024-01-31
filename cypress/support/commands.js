// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
          cy.visit('/')
          cy.get('._zdxht7 > ._nx3soc > ._1d38i1uk > ._i8newnu > ._90cwrv').type(username);
          cy.get(':nth-child(3) > ._1d38i1uk > ._i8newnu > ._90cwrv').type(password);
          cy.get('#user-sign-in').eq(0).click();
        //  cy.wait(4000);
          cy.get('._cvv7vr6').should('contain', 'Signed in successfully.')
          cy.wait(3000);
        //  cy.url().should('include','/time-tracking')
      
})

Cypress.Commands.add('timetracker',() => {
 cy.get('._1hglr1vl').invoke('text').then(timerText => {
  // Parse the timer value (assuming it's in format HH:MM:SS)
  const [hours, minutes, seconds] = timerText.split(':').map(Number);

  // Calculate the total time in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Wait for the duration until the timer exceeds 00:00:00
  cy.wait(totalSeconds * 1000); // Convert seconds to milliseconds
})
});



