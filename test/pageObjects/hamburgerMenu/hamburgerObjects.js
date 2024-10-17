class HamburgerObjects{

     get hamburgerMenuButton(){
          return $("//button[@id='react-burger-menu-btn']");
     }

     get hamburgerCrosseButton(){
          return $("//button[@id='react-burger-cross-btn']");
     }

     get hamburgerMenu_All_Items(){
          return $("//nav[@class='bm-item-list']/descendant::a[contains(.,'All Items')]")
     }

     get hamburgerMenu_About(){
          return $("//nav[@class='bm-item-list']/descendant::a[contains(.,'About')]")
     }

     get hamburgerMenu_Logout(){
          return $("//a[@id='logout_sidebar_link']");
     }

     get hamburgerMenu_Reset_App_State(){
          return $("//a[@id='reset_sidebar_link']");
     }

}

export default new HamburgerObjects();