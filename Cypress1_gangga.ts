describe('Testing', () => {

  it('login-success', () => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-cy="input-name"]').type('gangga')
    cy.get('[data-cy="input-password"]').type('88888888')
    cy.wait(600)
    cy.get('[data-cy="btn-login"]').click()
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${'gangga'}`)	
    cy.wait(600)
  })

  it('logout-success', () => {
    cy.visit('http://localhost:4200/')
    cy.get('[data-cy="input-name"]').type('gangga')
    cy.get('[data-cy="input-password"]').type('88888888')
    cy.wait(600)
    cy.get('[data-cy="btn-login"]').click()
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${'gangga'}`)	
    cy.wait(600)

    cy.get('[data-cy="btn-logout"]').click()

    cy.wait(500)
  })

  it('login-empty', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(600)

    cy.get('[data-cy="input-name"]').should('be.visible')
    cy.wait(600)

    cy.get('[data-cy="input-password"]').should('be.visible')
    cy.wait(600)

    cy.get('[data-cy="btn-login"]').click()

    cy.wait(500)
  })

  it('username-empty', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(600)

    cy.get('[data-cy="input-name"]').should('be.visible')
    cy.wait(600)

    cy.get('[data-cy="input-password"]').type('88888888')
    cy.wait(600)

    cy.get('[data-cy="btn-login"]').click()

    cy.wait(500)
  })

  it('password-empty', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(600)

    cy.get('[data-cy="input-name"]').type('gangga')
    cy.wait(600)

    cy.get('[data-cy="input-password"]').should('be.visible')
    cy.wait(600)

    cy.get('[data-cy="btn-login"]').click()

    cy.wait(500)
  })

  it('add-latte', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(600)
    cy.get('[data-cy="input-name"]').type('gangga')
    cy.get('[data-cy="input-password"]').type('88888888')
    cy.wait(600)
    cy.get('[data-cy="btn-login"]').click()
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${'gangga'}`)	

    cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
    cy.wait(600)

    cy.get('[data-cy="cart-item"]')
    cy.wait(600)

    cy.get('[data-cy="btn-checkout"]').click()
    cy.get('[data-cy="alert-message"]').should('contain','Items Purchased')
    cy.wait(600)

    // cy.get('[data-cy="cart-item"]').should('not.be.visible')
    // cy.wait(600)

    // cy.get('[data-cy="alert-message"]').should('be.visible')
    // cy.wait(600)

    cy.get('[data-cy="btn-logout"]').click()
    cy.wait(600)
  })
  
  it('remove-latte', () => {
    cy.visit('http://localhost:4200/')
    cy.wait(600)
    cy.get('[data-cy="input-name"]').type('gangga')
    cy.get('[data-cy="input-password"]').type('88888888')
    cy.wait(600)
    cy.get('[data-cy="btn-login"]').click()
    cy.get('[data-cy="text-navbar-profile-name"]').contains(`Hi, ${'gangga'}`)	

    cy.get(':nth-child(1) > .card-body > [data-cy="btn-add-menu-item-to-cart"]').click()
    cy.get('[data-cy="cart-item"]')
    cy.wait(800)

    cy.get('[data-cy="btn-remove-item-from-cart"]').click()
    cy.wait(800)
  })

  
})