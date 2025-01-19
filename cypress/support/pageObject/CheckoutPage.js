class CheckoutPage {
    fillShippingDetails(user) {
      cy.visit();
      cy.get('#customer-email').type('tamasucirahmadani@gmail.com');
      cy.get('[name="firstname"]').type('Tama');
      cy.get('[name="lastname"]').type('Suci');
      cy.get('[name="street[0]"]').type('Jl.hate');
      cy.get('[name="city"]').type('balabele');
      cy.get('[name="region_id"]').select('Texas');
      cy.get('[name="postcode"]').type('12345');
      cy.get('[name="telephone"]').type('123456789');
    }
  
    placeOrder() {
      cy.get('.action.primary.checkout').click();
    }
  }
  
  export default CheckoutPage;
  