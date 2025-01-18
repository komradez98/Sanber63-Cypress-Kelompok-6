describe('edit account information', () => {
    it('edit succes', () => {
        cy.loginDulu()
        cy.editAccountInfo('Sanber', 'Code')
        cy.get('.message-success').should('contain', 'You saved the account information.')
    })

    it('edit failed - empty firstname', () => {
        cy.loginDulu()
        cy.editAccountInfo(' ', 'Code')
        cy.get('#firstname-error').should('contain', 'This is a required field.')
    })

    it('edit failed - empty lastname', () => {
        cy.loginDulu()
        cy.editAccountInfo('Sanber', ' ')
        cy.get('#lastname-error').should('contain', 'This is a required field.')
    })

})

//   describe('edit address', () => {
//     it('successfully edit address', () => {
//     })
    
//     it('failed edit information', () => {
//     })
//   })