import landingPage from "../pageObejects/landingPage";
import signupLoginPage from "../pageObejects/signupLoginPage";
import loggedInState from "../pageObejects/loggedInState";



describe('Login in as an existing user', function(){
     
    it('Verify that the user can login with valid credentials', function(){
          const LandingPage = new landingPage()
          const SignupLoginPage = new signupLoginPage()
          const LoggedInState = new loggedInState()

        LandingPage.visitURL();
        LandingPage.signupLoginButton().click();
        SignupLoginPage.getEmailfeild().type('oeakingbehin@outlook.com');
        SignupLoginPage.getPasswordfeild().type('password@123456');
        SignupLoginPage.getLoginButton().contains('Log in').click();
        LoggedInState.getAccountIcon().should('exist').should('be.visible').debug();
 
    })
})