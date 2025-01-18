describe('edit account information', () => {
    it('You saved the account information.', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
        cy.get('#email').type('email.percobaan@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Percobaan123')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').clear().type('Sanber')
        cy.get('#lastname').clear().type('Code')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    })
    
    // it('failed edit information', () => {
    // })

})

//   describe('edit address', () => {
//     it('successfully edit address', () => {
//     })
    
//     it('failed edit information', () => {
//     })
//   })