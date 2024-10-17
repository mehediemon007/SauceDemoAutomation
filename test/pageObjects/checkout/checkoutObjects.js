class CheckoutObjects{

     get checkoutButton(){
          return $("//button[@id='checkout']");
     }

     get firstName(){
          return $("//input[@id='first-name']");
     }

     get lastName(){
          return $("//input[@id='last-name']");
     }

     get postalCode(){
          return $("//input[@id='postal-code']")
     }

     get continueButton(){
          return $("//input[@id='continue']")
     }

     get grandPrice(){
          return $("//div[@class='summary_subtotal_label']");
     }

     get finishedButton(){
          return $("//button[@id='finish']");
     }

     get completeOrder(){
          return $("//div[@class='checkout_complete_container']/child::h2");
     }

}
export default new CheckoutObjects();