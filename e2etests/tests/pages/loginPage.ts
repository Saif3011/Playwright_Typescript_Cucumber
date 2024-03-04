import { Page } from "playwright"
import { expect } from "@playwright/test"
import  * as loginPageLoc   from '../locators/loginPageLoc.json'
export default  class LoginPage {

   private page: Page;


    constructor(page: Page) {
        this.page = page;
    }


    async gotoApp() {

        await this.page.goto('https://ecommerce-playground.lambdatest.io/')
        await this.page.locator(loginPageLoc.loginLink.locator,loginPageLoc.loginLink.locatorOptions).click(loginPageLoc.loginLink.actionOptions)

    }

    async loginToApp() {

        await this.page.locator(loginPageLoc.emailField.locator).fill('dummy1234@gmail.com')
        await this.page.locator(loginPageLoc.passwordField.locator).fill('dummy1234@gmail.com')
        await this.page.locator(loginPageLoc.loginBtn.locator).click()
    }
    async ishomePageVisible() {
        await this.page.locator(loginPageLoc.editActLink.locator).waitFor(loginPageLoc.editActLink.actionOptions)
        expect(this.page.locator(loginPageLoc.editActLink.locator)).toBeVisible() 
    }

    async logout() {
    await this.page.locator(loginPageLoc.logoutLink.locator).click()
    await this.page.getByRole("link", { name: 'Continue' }).click()  
}


}
