import loginObjects from "./loginObjects";

class LoginActions{

    async setUsername(username){
        await loginObjects.username.setValue(username);
    }

    async setPassword(passCode){
        await loginObjects.password.setValue(passCode);
    }

    async clickLoginButton(){
        await loginObjects.loginButton.click();
    }

    async loginFunction(username,password){
        await this.setUsername(username);
        await this.setPassword(password);
        await browser.pause(1000);
        await this.clickLoginButton();

    }
}

export default new LoginActions();