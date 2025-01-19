class CartPage {
    // Mengunjungi halaman keranjang
    visit() {
        cy.visit('/checkout/cart'); // URL halaman keranjang
    }

    // Memeriksa apakah produk ada di keranjang
    verifyProductInCart(productName) {
        cy.get('.cart-items').should('be.visible').within( () => {
            cy.contains('.product-name',productName).should('exist');
        } );

    }

    // Menghapus produk dari keranjang
    removeProductFromCart(productName) {
        cy.get('.cart-items').contains(productName)
            .parents('.cart-item') // Mendapatkan elemen orang tua dari produk
            .find('.action.delete') // Mencari tombol hapus
            .click(); // Mengklik tombol hapus
            cy.get('.cart-items').should('not-contain',productName);
    }

    // Melanjutkan ke checkout
    proceedToCheckout() {
        cy.get ('.checkout-methods-items .button.checkout')
        cy.get('.checkout').click();
    }

    // Memastikan keranjang tidak kosong
    verifyCartIsEmpty() {
        cy.get('.cart-empty').should('exist'); // Memverifikasi halaman kosong
    }
}

export default CartPage;
  