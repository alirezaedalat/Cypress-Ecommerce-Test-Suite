// Custom assertions for the Weather Shopper tests
const validateTemperatureRange = (temperature) => {
  expect(temperature).to.be.a('number');
  expect(temperature).to.be.within(-30, 50); // Assuming a realistic temperature range
};

const validateCartTotal = () => {
  cy.get('.cart-item .price').then(($prices) => {
    const prices = [...$prices].map((price) => parseFloat(price.innerText));
    const total = prices.reduce((sum, val) => sum + val, 0);
    cy.get('.total').invoke('text').should('contain', total.toString());
  });
};

module.exports = {
  validateTemperatureRange,
  validateCartTotal,
};
