class searchResultPage{
    getResultPageURL(){
        return cy.url().should('include', 'restaurant-vouchers/search?');
    }
}
export default searchResultPage;