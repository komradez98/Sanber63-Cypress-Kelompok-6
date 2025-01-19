class ProductPage {
  // Kunjungi halaman katalog atau produk
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/women/tops-women.html'); // Ganti URL sesuai kategori produk

  }

  // Pilih produk dari katalog berdasarkan nama
  selectProduct(productName) {
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link') // Mencari produk berdasarkan nama
  }

  // Pilih atribut produk (ukuran dan warna)
  selectAttributes(size, color) {
    if (size) {
      cy.get('.swatch-attribute.size')
        .contains(size)
        .click();
    }

    if (color) {
      cy.get('.swatch-attribute.color' , {timeout:10000})
        .contains(color)
        .should('be.visible')
        .click()
    }
  }

  // Tambahkan produk ke keranjang
  addToCart(quantity = 1) {
    // Set jumlah produk
    cy.get('.box-tocart')
    .clear()
    .type('1');

    // Klik tombol Add to Cart
    cy.get('.action.tocart').should('be.visible').click();

    // Verifikasi pop-up keranjang muncul
    cy.get('.minicart-wrapper').should('be.visible');
  }
}

export default ProductPage;
