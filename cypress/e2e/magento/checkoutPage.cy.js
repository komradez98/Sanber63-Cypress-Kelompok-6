import LoginPage from '../../support/pageObject/loginPage';
import ProductPage from '../../support/pageObject/productPage';
import CartPage from '../../support/pageObject/cartPage';
import CheckoutPage from '../../support/pageObject/CheckoutPage';

describe('Magento Proceed to Checkout', () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  before(() => {
    cy.fixture('user').then((user) => {
      cy.wrap(user).as('userData');
    });
  });

  it('Should login, add product to cart, and proceed to checkout', function () {
    // Login
    loginPage.visit();
    loginPage.fillEmail('tamasucirahmadani@gmail.com');
    loginPage.fillPassword('Tamasuci123');
    loginPage.submit();

    // Add Product to Cart
   productPage.visit();
   productPage.selectProduct('Breathe-Easy Tank');
   productPage.selectAttributes();
   productPage.addToCart();

    // Proceed to Checkout
    cartPage.visit();
    cartPage.verifyProductInCart();
    cartPage.proceedToCheckout();

    // Fill Shipping Details
    checkoutPage.fillShippingDetails(this.userData);

    // Place Order
    checkoutPage.placeOrder();

    // Verify Order Confirmation
    cy.contains('Thank you for your purchase').should('be.visible');
  });
});
