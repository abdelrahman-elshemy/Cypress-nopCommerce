class Register
{
    ClickOnRegister()
    {
        cy.get('.ico-register').click();
    }

    ChoosingGender()
    {
        cy.get('[id="gender-male"]').click();
    }
    
    SetFirstName(FName)
    {
    cy.get('[data-val-required="First name is required."]').type(FName)
    .should('have.value',FName);   // Entering first name
    }

    SetSecondName(Secondname)
    {
        cy.get('[data-val-required="Last name is required."]').type(Secondname)
        .should('have.value',Secondname); // Entering last name
    }
    SetDay(Day)
    {
        cy.get('[name="DateOfBirthDay"]').select(Day).should('have.value',Day);
    }
    SetMonth(Month)
    {
        cy.get('[name="DateOfBirthMonth"]').select(Month).should('have.value',Month);
    }
    SetYear(Year)
    {
        cy.get('[name="DateOfBirthYear"]').select(Year).should('have.value',Year);
    }
    SetEmail(Email)
    {
        cy.get('#Email').type(Email);
    }

    SetPassword(Password)
    {
        cy.get('[type="password"]').eq(0).type(Password).should('have.value',Password);
    }

    ConfirmPassword(ConfirmPassword)
    {
        cy.get('[data-val-equalto="The password and confirmation password do not match."]').type(ConfirmPassword).should('have.value',ConfirmPassword); // confirm password

    }

    ConfirmRegister()
    {
        cy.get('[name="register-button"]').click();
    }

    ClickOnContinue()
    {
        cy.get('[class="button-1 register-continue-button"]').click();
    }
 

}

export default Register;