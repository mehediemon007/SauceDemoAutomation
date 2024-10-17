import utilities from "../utilities/utilities";
import checkoutObjects from "./checkoutObjects";
import addToCartActions from "../addToCart/addToCartActions";

class CheckoutActions{

     async clickCheckOutButton(){
          await checkoutObjects.checkoutButton.click();
     }

     async setFirstName(firstName){
          await checkoutObjects.firstName.setValue(firstName);
     }

     async setLastName(lastName){
          await checkoutObjects.lastName.setValue(lastName);
     }

     async setPostalCode(postCode){
          await checkoutObjects.postalCode.setValue(postCode);
     }

     async clickContinueButton(){
          await checkoutObjects.continueButton.click();
     }
     
     async checkProducts(n){
          let productNames = addToCartActions.productNames;
          let productName,index=1 ;    
          while(index<=n){
               productName = await  $(`(//div[@class='cart_item'])[${index}]//div[@class='inventory_item_name']`).getText();
               if(!productNames.includes(productName)){
                    return "Cart Prodcuts Not Matched"
               }
               index++;
          }

          return "Cart Prodcuts Matched";
     }

     async totalPrice(){
          let totalPriceText = await checkoutObjects.grandPrice.getText();
          let result = utilities.trimsFloat(totalPriceText);
          return result;
     }

     async clickFinishButton(){
          await checkoutObjects.finishedButton.click();
     }

     async clickBackHomeButtons(){
          await checkoutObjects.backHome.click();
     }

     async completeOrderMessage(){
          return await checkoutObjects.completeOrder.getText();
     }

     async checkoutInfos(firstName,lastName,postCode){
          await this.clickCheckOutButton();
          await this.setFirstName(firstName);
          await this.setLastName(lastName);
          await this.setPostalCode(postCode);
          await this.clickContinueButton();
          await browser.pause(1000);
     }

}
export default new CheckoutActions();