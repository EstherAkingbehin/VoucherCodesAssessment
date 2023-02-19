import landingPage from "../pageObejects/landingPage";
import resturantsPage from "../pageObejects/resturantsPage";
import enterLandingPage from "../pageObejects/enterLandingPage";





describe('Search for offers in local resturant in London', function(){
    it('Verify that the user can search for offers in local resturants in london for any given day, for 2 people', function(){
        const LandingPage = new landingPage()
        const ResturantsPage = new resturantsPage()
        const EnterLandingPage = new enterLandingPage()
        

        EnterLandingPage.enterURL();
        LandingPage.getCategory().click();
        LandingPage.getCategoryresturants().click();
        //dynamic dropdown
        ResturantsPage.enterLocation().type('Lon').wait(300)
        ResturantsPage.selectLocation().eq(0).wait(1000).click({force: true});
        //static dropdowin
        ResturantsPage.selectAgivenDay().select(1);
        ResturantsPage.selectNumberofPeople().select(3);
        ResturantsPage.getSearch().click();
        cy.url().should('include', 'restaurant-vouchers/search?');

    })
}) 