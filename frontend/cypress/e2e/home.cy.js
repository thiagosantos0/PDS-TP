describe('Home button', () => {
  it('Visit Home', () => {
    cy.visit('http://localhost:5173/')
    expect(true).to.equal(true)
  })
})