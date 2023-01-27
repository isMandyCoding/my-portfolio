/// <reference types="cypress" />

context('About Section', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Clicks the Link "#about', () => {
    cy.contains('About').click();
    cy.contains("Hello! I'm a full-stack developer").should('be.visible')
    cy.url().should('include', '#about')
  })
})
