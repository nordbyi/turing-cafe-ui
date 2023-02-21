describe("Main", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", [
      { id: 1, name: "Christie", date: "12/29", time: "7:00", number: 12 },
      { id: 2, name: "Leta", date: "4/5", time: "7:00", number: 2 },
      { id: 3, name: "Pam", date: "1/21", time: "6:00", number: 4 },
    ]);
    cy.visit("http://localhost:3002/");
  });

  it("should display logo", () => {
    cy.get(".app-title").should("be.visible");
  });

  it("should have reservations", () => {
    cy.get("#1").should("be.visible").contains("Christie");
    cy.get("#2").should("be.visible").contains("Leta");
    cy.get("#3").should("be.visible").contains("Pam");
  });

  it('should have a form', () => {
    cy.get('form').should("be.visible")
  })

  it('should be able to type into the form\'s inputs', () => {
    
  })
});
