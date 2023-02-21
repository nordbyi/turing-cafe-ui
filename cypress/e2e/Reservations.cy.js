describe("Reservations", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", [
      { id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12 },
      { id: 2, name: "Leta", date: "4/5", time: "7:00", number: 2 },
      { id: 3, name: "Pam", date: "1/21", time: "6:00", number: 4 },
    ]);
    cy.visit("http://localhost:3002/");
  });

  it('should have a number of reservations', () => {
    cy.get('.container').should('be.visible')
  })
})