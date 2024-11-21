export class HomePage {
  visit() {
    cy.visit('http://weathershopper.pythonanywhere.com/');
  }

  checkTemperatureAndNavigate() {
    cy.get('#temperature').then(($temp) => {
      const temperature = parseInt($temp.text());
      if (temperature < 19) {
        cy.contains('Buy moisturizers').click();
        return 'moisturizers';
      } else {
        cy.contains('Buy sunscreens').click();
        return 'sunscreens';
      }
    });
  }
}
