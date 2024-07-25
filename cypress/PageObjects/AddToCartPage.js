

class AddToCart
{
    SearchForItem(Item)
    {
        cy.get('[class="search-box-text ui-autocomplete-input"]').type(Item).should('have.value',Item);
    }

    ClickOnSearch()
    {
        cy.get('[class="button-1 search-box-button"]').click();
    }
    
    ChooseSecondItem()
    {
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click();
    }

    ClickOnCartLabel()
    {
        cy.get('[class="cart-label"]').click();
    }
    ClickOnAcceptServicesButton()
    {
        cy.wait(3000);
        cy.get('[id="termsofservice"]').click();
    }
    ClickOnCheckoutButton()
    {
        cy.get('[id="checkout"]').click();
    }
    ChooseCountry()
    {
        cy.get('[data-val-required="Country is required."]').select('Egypt');
    }
    InputCity(city)
    {
        cy.get('[data-val-required="City is required"]').type(city);
    }
    InputAddress(address)
    {
        cy.get('[id="BillingNewAddress_Address1"]').type(address);
    }
    InputPostalCode(postal)
    {
        cy.get('[id="BillingNewAddress_ZipPostalCode"]').type(postal);
    }
    InputPhoneNumber(phone)
    {
        cy.get('[id="BillingNewAddress_PhoneNumber"]').type(phone);
    }
    ClickContin()
    {
        cy.get('[class="button-1 new-address-next-step-button"]').eq(0).click();
    }
    ClickAnotherContin()
    {
        cy.get('[class="button-1 shipping-method-next-step-button"]').click();
    }
    ClickAnotherContin2()
    {
        cy.get('[class="button-1 payment-method-next-step-button"]').click();
    }
    ClickContinue4()
    {
        cy.get('[class="button-1 payment-info-next-step-button"]').click();
    }
    ClickConfirm()
    {
        cy.get('[class="button-1 confirm-order-next-step-button"]').click();
    }





    
}

export default AddToCart