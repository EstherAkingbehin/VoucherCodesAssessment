class LoggedinLandingPage{

    getAccountIcon(){
    return cy.get('svg[data-qa="el:accountIcon loggedIn:true isAdmin:false"]')
    }
}

export default LoggedinLandingPage;