class LoginPage {
    visit() {
      cy.visit('/customer/account/login');
    }
    
    fillEmail(email) {
      cy.get('#email').type('tamasucirahmadani@gmail.com');
    }
  
    fillPassword(password) {
      cy.get('#pass').type('Tamasuci123)');
    }
  
    submit() {
       cy.get('#send2').click();      
    }
  }
  
  export default LoginPage;
  