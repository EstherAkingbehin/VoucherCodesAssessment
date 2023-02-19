class signupLoginPage{

getEmailbox(){
    return cy.get('[data-qa="el:logInEmail"]')
}
getPasswordbox(){
    return cy.get('[data-qa="el:logInPassword"]')
}
getLoginButton(){
   return  cy.get('button[role=button]')
}

}
export default signupLoginPage;