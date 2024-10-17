class LoginObjects{

    get username(){
         return $("//input[@id='user-name']")
    }

    get password(){
         return $("//input[@id='password']")
    }
    get loginButton(){
         return $("//input[@id='login-button']")
    }
    get errorMessage(){
         return $("//h3[@data-test='error']")
     }

}

export default new LoginObjects();