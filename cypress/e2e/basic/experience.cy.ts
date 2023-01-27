/// <reference types="cypress" />

context('Experience Section', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Clicks the Link "#experience', () => {
    cy.contains('Experience').click();
    cy.contains("My Experience").should('be.visible')
    cy.url().should('include', '#experience')
  })
})
