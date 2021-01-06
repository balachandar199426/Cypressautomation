describe('For Login scripbox', () => {
    it('Vist the scripbox' , () => {
     //user visit the scripbox
        cy.visit('https://scripbox.com//');
        cy.wait(5000);
     //user click on login
        cy.get(':nth-child(3) > .nav-link').click();
        cy.wait(5000);
     //user enter email or mobile number
        cy.get('#test-email-input').type('bala621994@gmail.com{enter}');
     //user click on next to enter password
        //cy.get('#test-login-next-button').click();
        //cy.wait(3000);
     //user enter password
        cy.get('#user_password').type('Bala@2791{enter}');
        cy.wait(2000);
     //user click on login
      //cy.get('#test-signup-next-button').click();
      //  cy.wait(5000);
      //  cy.title().should('include' , 'Scripbox.com - The best way to invest in mutual funds online in india');
     //user click on plans
        cy.get('.test-plans').contains('Plans').click();
        cy.wait(5000);
     //user will select plan type
        cy.get('.test-offering-equity > :nth-child(1) > .scard-container > .row').click();
        cy.wait(2000);
        cy.get('.button-divider > .waves-effect').click();
        cy.get('.test-offering-debt > :nth-child(1) > .scard-container > .row').click();
     //user will go next page by clicking on next button
        //cy.get(':nth-child(2) > .waves-effect').contains('Next').click();
        //cy.wait(3000);
        cy.get('.desktop-logout-container').click();

    })
});