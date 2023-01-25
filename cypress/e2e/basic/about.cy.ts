/// <reference types="cypress" />

context('About Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Clicks the Link "#about', () => {
    cy.contains('About').click();
    cy.contains("Lorem ipsum").should('be.visible')
    cy.url().should('include', '#about')
  })
})
