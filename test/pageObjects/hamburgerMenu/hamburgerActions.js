import hamburgerObjects from "./hamburgerObjects";

class HamburgerActions{

     async clickHamburgerMenu(){
          await hamburgerObjects.hamburgerMenuButton.click();
     }

     async clickHamburgerCross(){
          await hamburgerObjects.hamburgerCrosseButton.click();
     }

     async clickAllItems(){
          await hamburgerObjects.hamburgerMenu_All_Items.click();
     }

     async clickAbout(){
          await hamburgerObjects.hamburgerMenu_About.click();
     }

     async clickLogout(){
          await hamburgerObjects.hamburgerMenu_Logout.click();
     }

     async clickResetAppState(){
          await hamburgerObjects.hamburgerMenu_Reset_App_State.click();
     }

     async actionMenu(text){
          if(text === 'All Items'){
               await this.clickAllItems();
          }
          else if(text === 'About'){
               await this.clickAbout();
          }
          else if(text === 'Logout'){
               await this.clickLogout();
          }
          else {
               await this.clickResetAppState();
          }
     }

     async hamburgerOperation(text){
          await this.clickHamburgerMenu();
          await this.actionMenu(text);
          await this.clickHamburgerCross();
     }
}

export default new HamburgerActions();