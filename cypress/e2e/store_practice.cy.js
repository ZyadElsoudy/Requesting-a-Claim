//const cypress = require("cypress");

//const cypress = require("cypress")
const ID=9;
describe('Client E2E Scenario',()=>{
it('Create order',()=>{
  cy.request({
method:"POST",
url:"https://petstore.swagger.io/v2/store/order",
 body: {
    // Your JSON payload here
  },

  }).then((Response)=>{
    expect(Response.status).to.eql(200);
    //ID=Response.body.id;
  })
})
it('GET Order By ID',()=>{
    cy.request({
        method:"GET",
        url:`https://petstore.swagger.io/v2/store/order/${ID}`,
       /* qs:{
            "orderId":ID
        },*/ 
        body: {
            // Your JSON payload here
          }
    }).then((Response)=>{
        expect(Response.status).to.eql(200);
      // cy.wrap(Response.data).should('have.a.property','id','6');
    })
})



})