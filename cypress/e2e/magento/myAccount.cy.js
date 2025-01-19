describe('edit account information', () => {
    it('edit success', () => {
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

  describe('edit address', () => {
    it('edit address success', () => {
        cy.loginDulu()
        cy.editAddress({
            company: 'Sanbercode',
            phone: '123456789',
            street: '21 Bedok st',
            city: 'Melbourne',
            region: 'Alaska',
            zip: '6789',
            country: 'United States'
          });
        cy.get('.message-success').should('contain', 'You saved the address.')
    })
    
    it('edit address failed - street empty', () => {
        cy.loginDulu()
        cy.editAddress({
            company: 'Sanbercode',
            phone: '123456789',
            street: ' ',
            city: 'Melbourne',
            region: 'Alaska',
            zip: '6789',
            country: 'United States'
          });
        cy.get('#street_1-error').should('contain', 'This is a required field.')
    })

    it('edit address failed - region empty', () => {
        cy.loginDulu()
        cy.editAddress({
            company: 'Sanbercode',
            phone: '123456789',
            street: '21 bedok st',
            city: 'Melbourne',
            region: '',
            zip: '6789',
            country: 'United States'
          });
        cy.get('#region_id-error').should('contain', 'Please select an option.')
    })

  })