class loggedInState{
    getAccountIcon(){
        return cy.get('svg[data-qa="el:accountIcon loggedIn:true isAdmin:false"]')
    }
}
export default loggedInState