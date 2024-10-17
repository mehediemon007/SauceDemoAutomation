class AddToCartObjects{

    get productItem(){
        return $("//div[@class='inventory_list']/child::div[@class='inventory_item'][1]")
    }
    
    get cartIcon(){
        return $("//a[@class='shopping_cart_link']");
    }

    get cartBadge(){
        return $("//span[@class='shopping_cart_badge']");
    }
}

export default new AddToCartObjects();