
// Importing pages to the main page
import AddToCart from "../PageObjects/AddToCartPage";
import Register from "../PageObjects/RegisterPage";
import Login from "../PageObjects/LoginPage";
// Declaring Faker library
 const { faker } = require('@faker-js/faker');
 const randomEmail = faker.internet.email(); 

 
 describe('NopCommerce Tests', () => {
  let userData; // Declare a global variable to hold user data

  before(() => {
    cy.fixture('datadriven.json').then((data) => { // Load the JSON file
      userData = data; // Assign the data to the global variable
    });
  });
  


  it.only('Full Scenario', () => {
      const ln = new Register();
      cy.visit("https://demo.nopcommerce.com/");

      ln.ClickOnRegister();
      ln.ChoosingGender();
      ln.SetFirstName(userData.Firstname);
      ln.SetSecondName(userData.Lastname);
      ln.SetDay(userData.day);
      ln.SetMonth(userData.month);
      ln.SetYear(userData.year);
      ln.SetEmail(randomEmail);
      ln.SetPassword(userData.password);
      ln.ConfirmPassword(userData.password);
      ln.ConfirmRegister();
      ln.ClickOnContinue();

      const add = new AddToCart();
      add.SearchForItem(userData.type);
      add.ClickOnSearch();
      cy.wait(1000);
      add.ChooseSecondItem();
      add.ClickOnCartLabel();
      add.ClickOnAcceptServicesButton();

      add.ClickOnCheckoutButton();
      add.ChooseCountry();
      add.InputCity(userData.city);
      add.InputAddress(userData.address);
      add.InputPostalCode(userData.postal);
      add.InputPhoneNumber(userData.phonenumber);
      add.ClickContin();
      add.ClickAnotherContin();
      add.ClickAnotherContin2()
      add.ClickContinue4();
      add.ClickConfirm();

  });
});



  ///////////// Identifing Excel sheet and Storing the data in the excel sheet///////////

  // before(() => {
  //   cy.task('readXl', {
  //     file: 'C:/Users/NOUR SOFT/Desktop/testsheet.xlsx',
  //     sheet: 'Sheet1'
  //   }).then((rows) => {
  //     userdata = rows; // Storing the entire data set from the Excel sheet
  //   });
  // });

  /////////////////Reading ExcelSheet and identify num of rows////////////

  // it('Read excel file', () => {
  //   cy.task('readXl', { file: 'C:/Users/NOUR SOFT/Desktop/testsheet.xlsx', sheet: "Sheet1" })
  //     .then((rows) => {
  //       expect(rows.length).to.equal(7); // Adjust this based on your data
  //     });
  // });




  ///////// This code should be in the cypress.config.js file ///////////////////

  
  // const { defineConfig } = require('cypress');
  // const fs = require('fs');
  // const xlsx = require('xlsx');
  
  // module.exports = defineConfig({
  //   e2e: {
  //     setupNodeEvents(on, config) {
  //       on('task', {
  //         readXl({ file, sheet }) {
  //           const buf = fs.readFileSync(file);
  //           const workbook = xlsx.read(buf, { type: 'buffer' });
  //           const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
  //           return rows;
  //         },
  //       });
  //     },
  //     experimentalStudio: true,
  //     viewportHeight: 1000,
  //     viewportWidth: 1000,
  //   },
  // });