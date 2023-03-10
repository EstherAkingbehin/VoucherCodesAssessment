class landingPage {
    visitURL(){
        return cy.visit('https://www.vouchercodes.co.uk/');

    }
    signupLoginButton(){
        return  cy.get('[data-qa="el:signUpLogInButton"]');
    }
    getCategory(){
        return cy.get('[data-qa="el:categoriesHeader active:false"] > span');
    }
    getCategoryresturants(){
        return cy.get('.pt-4 > [href="/restaurant-vouchers.html"]');
    }



}

export default landingPage;