import { browser, by, element, protractor } from "protractor";


   export class LoginPage{

     Username = element(by.css('[placeholder="User Name"]'));
     Password = element(by.css('[placeholder="Password"]'));
     Login = element(by.buttonText('Login'));
     Notification = element(by.css('.notifier__notification-message.ng-star-inserted'));
     Logout = element(by.css('.fa.fa-sign-out'));
     Validation = element.all(by.css('.mat-error.ng-star-inserted'));
     UserMenuName = element(by.css('.text-12'));
     UserMenuProfile = element(by.css('.text-10'));
  
      async SetUserName(name : string) {
         await this.Username.sendKeys(name);
        };
      async SetPassword(name : string) {
        await this.Password.sendKeys(name);
        };
      async ClickLogin() {
          await this.Login.click();
        };
      async notification_text() {
          return await this.Notification.getText();
        };
        logout() {
            return this.Logout;
        }
        async username_validation_text() {
          await browser.sleep(1000);
          return this.Validation.get(0).getText();
        };
        async password_validation_text() {
          await browser.sleep(1000);
          return this.Validation.get(1).getText();
        };
        async user_menu_text(){
          await browser.sleep(1000);
          return this.UserMenuName.getText();
        }
        async user_menu_profile(){
          await browser.sleep(1000);
          return this.UserMenuProfile.getText();
        }
  }
