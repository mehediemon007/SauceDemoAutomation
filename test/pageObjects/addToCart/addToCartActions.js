import utilities from "../utilities/utilities";
import addToCartObjects from "./addToCartObjects";
import filterActions from "../filter/filterActions";

class AddToCartActions {
     productNames = [];
     productPrices = [];

     async addToCart(n){

          if(n==1){
               this.productName(n);
               this.productPrice(n);
               await $(`(//div[@class='inventory_item'])[1]//button[contains(@class,'btn_inventory')]`).click();
               
          }else{
               let i=1;
               while(i<=n){
                    
                    let index = Math.floor(Math.random() * 6) + 1;
                    if(await this.productName(index)){
                         await $(`(//div[@class='inventory_item'])[${index}]//button[contains(@class,'btn_inventory')]`).click();
                         await this.productPrice(index);
                         i++;
                    }
               }
          }
     }

     async productName(index){
          let pName = await $(`(//div[@class='inventory_item'])[${index}]//div[contains(@class,'inventory_item_name')]`).getText();
          if(!this.productNames.includes(pName)){
               this.productNames.push(pName);
               return true;
          }
          
     }

     async productPrice(index){
          let pPriceText = await $(`(//div[@class='inventory_item'])[${index}]//div[contains(@class,'inventory_item_price')]`).getText();
          let pPrice= utilities.trimsFloat(await pPriceText);
          this.productPrices.push(pPrice);
     }
     
     async viewCart(){
          await addToCartObjects.cartIcon.click();
     }

     async totalCartProducts(){
          return await addToCartObjects.cartBadge.getText();
     }

     async addToCartFunction(n){
          await this.addToCart(n);
          await browser.pause(1000);
          await this.viewCart();
     }

}

export default new AddToCartActions();