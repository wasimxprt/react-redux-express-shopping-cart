describe("Signup Form ", () => {
    context('Fill Signup Form', () => {
        it.only('Can fill the form', () => {
            cy.visit('/')
            cy.get('a').contains('Signup').click({ force: true });
            cy.get('input[name="username"]').type("wasimxprt").should("have.value", "wasimxprt");
            cy.get('input[name="email"]').type("test@gmail.com").should("have.value", "test@gmail.com");
            cy.get('input[name="password"]').type("password").should("have.value", "password");
            cy.get('button').contains('Submit').click();
        })
    })
})