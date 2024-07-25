class Login
{
    ClickOnLogout()
    {
        cy.get('[class="ico-logout"]').click();
    }

    ClickOnLogin()
    {
        cy.get('[class="ico-login"]').click();
    }
    
    SetEmail(email)
    {
        cy.get('[data-val-regex="Wrong email"]').type(email);
    }

    SetPassword(password)
    {
        cy.get('[class="password"]').type(password);
    }
    LoginAgain()
    {
        cy.get('[class="button-1 login-button"]').click();
    } 

}

export default Login;