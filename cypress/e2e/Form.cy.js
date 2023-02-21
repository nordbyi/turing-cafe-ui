describe("Form", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", [
      { id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12 },
      { id: 2, name: "Leta", date: "4/5", time: "7:00", number: 2 },
      { id: 3, name: "Pam", date: "1/21", time: "6:00", number: 4 },
    ]);
    cy.visit("http://localhost:3002/");
  });

  it('should display the form', () => {
    cy.get('form').should('be.visible')
  })

  it('should be able to type into the inputs', () => {
    cy.get('.name').type('Turtle').should('have.value', 'Turtle')
    cy.get('.date').type('12/21').should('have.value', '12/21')
    cy.get('.time').type('6').should('have.value', '6')
    cy.get('.guests').type('5').should('have.value', '5')
  })

  it('should be able to add a reservation on submit', () => {
    cy.get('.name').type('Turtle').should('have.value', 'Turtle')
    cy.get('.date').type('12/21').should('have.value', '12/21')
    cy.get('.time').type('6').should('have.value', '6')
    cy.get('.guests').type('5').should('have.value', '5')
    cy.get('.submitButton').click()
    cy.contains('Turtle')
    cy.contains('12/21')
    cy.contains('6')
    cy.contains('5')
  })
});
