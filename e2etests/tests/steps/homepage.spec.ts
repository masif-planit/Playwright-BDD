import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {getPage} from "../../corelib/corelib.spec";

import HomePage from "../pages/homepage";
import LoginPage from "../pages/loginpage";

let homePage:HomePage;
let loginPage:LoginPage;

Then('Home page should be displayed', async function () {
    homePage=new HomePage(getPage(), this.attach);
    await homePage.waitForEditAcInfo();
    console.log(`home page: value is ${this.parameters.a}`);
});

When('Upon logout', async function () {
    loginPage=new LoginPage(getPage(), this.attach);
    await loginPage.logout();
    this.attach(`logout is done....!`);
    console.log(`home page: value is ${this.parameters.a}`);
});
