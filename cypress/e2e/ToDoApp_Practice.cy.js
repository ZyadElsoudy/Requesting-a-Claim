describe('E2E Request Defintion',()=>{
    let TOKEN ;
    beforeEach('Login To do App',()=>{
       cy.request({
        method:'POST',
        url:"https://qacart-todo.herokuapp.com/api/v1/users/login",
        body:{
            "email": "zyadelsoudy1042021@gmail.com",
            "password": "Zooz552000*"
        },


       }).then((Response) =>{
        expect(Response.status).to.eql(200);
        expect(Response.body.firstName).to.eql('Zyad');
        TOKEN=Response.body.access_token

       })
    });

    it('GET All Tasks',()=>{
        cy.request({
            method:'GET',
            url:" https://qacart-todo.herokuapp.com/api/v1/tasks",
            headers:{
                Authorization:`Bearer ${TOKEN}`

            }

        }).then((response)=>{
            cy.log('API Response: ', response);
        })
       
    })
});