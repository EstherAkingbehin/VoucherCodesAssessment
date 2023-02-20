import landingPage from "../pageObejects/landingPage";
import signupLoginPage from "../pageObejects/signupLoginPage";
import LoggedinLandingPage from "../pageObejects/LoggedinLandingpage";



describe('Login in as an existing user', function(){
     
    it('Verify that the user can login with valid credentials', function(){
          const LandingPage = new landingPage()
          const SignupLoginPage = new signupLoginPage()
          const loggedinLandingPage = new LoggedinLandingPage()

        LandingPage.visitURL();
        LandingPage.signupLoginButton().click();
        SignupLoginPage.getEmailfeild().type('oeakingbehin@outlook.com');
        SignupLoginPage.getPasswordfeild().type('password@123456');
        SignupLoginPage.getLoginButton().contains('Log in').click();
        loggedinLandingPage.getAccountIcon().should('exist').should('be.visible').debug();
 
    })
})