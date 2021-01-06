describe('Api testing' , () => {
    Cypress.config('baseUrl' , 'http://dummy.restapiexample.com/api/v1')
      it('GET = read', () => {
          cy.request('GET' , '/employees').then((response) => {
              expect(response).to.have.property('status', 200)
              expect(response).to.not.be.null
              expect(response.body.data).to.have.length(24)
          });
      })
      it('Post - Create' , () =>{
          const item = {"name":"test","salary":"123","age":"23"}
          cy.request('POST' , '/create' , item)
          .its('body')
          .its('data')
          .should('include' , {name:'test'})
          
      })
      it('PUT - update' , () =>{
          const item={"name":"test1"}
          cy.request({method:'PUT' , url:'/update/1' , body:item , failOnStatusCode: false}).its('status').should('eq',429) 
      })
}) 