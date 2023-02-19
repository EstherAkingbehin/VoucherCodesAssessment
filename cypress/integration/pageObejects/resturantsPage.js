class resturantsPage{
    enterLocation(){
        return cy.get('[data-qa="el:locationDropdown enabled:true"]');
    }
    selectLocation(){
        return cy.get('.pac-container').find('.pac-matched');
    }
    selectAgivenDay(){
        return cy.get('#day-select')
    }
    selectNumberofPeople(){
        return cy.get('#people-select');
    }
    getSearch(){
        return cy.get('button[data-qa="el:findRestaurantsVoucherButton"]');
    }
}
export default resturantsPage;