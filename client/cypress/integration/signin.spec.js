describe("Sigin Form ", () => {
    context('Sign In Form', () => {
        it.only('Can fill the form', () => {
            cy.visit('/')
            cy.get('a').contains('Signin').click({ force: true });
            cy.get('input[name="username"]').type("wasimxprt").should("have.value", "wasimxprt");
            cy.get('input[name="password"]').type("password").should("have.value", "password");

            // cy.server();
            // cy.route({
            //     //url: "/users/**",
            //     url:"http://localhost:8080/api/auth/signin",
            //     method: "POST",
            //     response: { status: "Form saved!", code: 201 }
            // });

            cy.get('button').contains('Submit').click();
        })
    })
})