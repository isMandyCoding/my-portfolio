/// <reference types="cypress" />

context('Contact Section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Clicks the Link "#contact', async () => {
    cy.contains('Contact').click().as('clickContact')
    cy.contains("Contact Me").should('be.visible')
    cy.url().should('include', '#contact')
  })
})
