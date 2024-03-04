import { Given, When, Then, setDefaultTimeout, Before, After } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page, chromium } from 'playwright'
import { expect } from "@playwright/test"
import { getPage } from '../../corelib/corelib.spec';
import LoginPage from '../pages/loginPage'

let loginPage: LoginPage;
Given('User is on login page', async function () {
    loginPage = new LoginPage(getPage())
    await loginPage.gotoApp()
});

When('User enter login details', async function () {
    await loginPage.loginToApp()
});

Then('Home page should be displayed', async function () {
    await loginPage.ishomePageVisible()
});

When('Upon logout', async function () {
    await loginPage.logout()
});
Then('Logout should be successfull', async function () {
    console.log("Logout should be successfull");

});