import { browser, by, element, protractor,Locator } from "protractor";
import * as testdata from "../testdata/testdata.json";
import {LoginPage} from "../pages/loginPage";
import {Utill} from "../utill/utill";
//let testdata = require("../testdata/testdata");
let loginpage = new LoginPage();
let utill = new Utill();

describe("login functionality", function(){
    beforeEach(async function(){ 
      await browser.get(testdata.siteurl);
    })
    // afterEach(async function(){
    //     await browser.quit();
    // })
        xit('Entering Blank Login Credential', async function() {
            await loginpage.SetUserName("");
            await loginpage.SetPassword("");
            await loginpage.ClickLogin(); 
            expect<any>(await loginpage.username_validation_text()).toEqual("User Name is required");
            expect<any>(await loginpage.password_validation_text()).toEqual("Password is required");         
          });
        it('Entering Actual Login Credential', async function(){
            await loginpage.SetUserName(testdata.username);
            await loginpage.SetPassword(testdata.password);
            await loginpage.ClickLogin();
            expect<any>(await loginpage.user_menu_text()).toEqual(testdata.usermenuname);
            expect<any>(await loginpage.user_menu_profile()).toEqual(testdata.usermenuprofile);
        })
})