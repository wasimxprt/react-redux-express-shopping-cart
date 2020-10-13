var request = require('supertest')
    , app = require("../server");

describe("homepage", function () {
    it("welcomes the user", function (done) {
        request(app).get("/")
            .expect(200)
            .expect(/Welcome to shopping application./, done)
    })
})