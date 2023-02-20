class signupLoginPage{

getEmailfeild(){
    return cy.get('[data-qa="el:logInEmail"]')
}
getPasswordfeild(){
    return cy.get('[data-qa="el:logInPassword"]')
}
getLoginButton(){
   return  cy.get('button[role=button]')
}

}
export default signupLoginPage;