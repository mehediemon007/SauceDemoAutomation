import loginActions from "../pageObjects/login/loginActions";
import hamburgerActions from "../pageObjects/HamburgerMenu/hamburgerActions";
import addToCartActions from "../pageObjects/addToCart/addToCartActions";
import checkoutActions from "../pageObjects/checkout/checkoutActions";
import utilities from "../pageObjects/utilities/utilities";
import filterActions from "../pageObjects/filter/filterActions";

let n=1;

describe("Filter products for Adding to Cart and verify complete Order process ", ()=>{


    it('should login successfully with valid credentials', async () => {

        await loginActions.loginFunction('performance_glitch_user', 'secret_sauce');

    });

    it("Should Reset App after Login", async()=>{

        await hamburgerActions.hamburgerOperation("Reset App State");
    })

    it("Should Able to Filter Products",async()=>{
        await filterActions.filterProduct("za");
    })


    it("Should able to add product on cart successfully", async()=>{
        await addToCartActions.addToCartFunction(n);
        let totalProducts =  Number(await addToCartActions.totalCartProducts());
        expect(totalProducts).toEqual(n);
    })

    it("Should Display Cart Products and Total Amounts Correctly ",async()=>{

        await checkoutActions.checkoutInfos("Mehedi Hasan","Emon",5840);
        console.log("aa", await addToCartActions.productPrices[0]);        
        // expect(await checkoutActions.checkProducts(n)).toEqual("Cart Prodcuts Matched");

        let expectedTotal = utilities.sumTotal(addToCartActions.productPrices);
        expect(await checkoutActions.totalPrice()).toEqual(expectedTotal);

        await checkoutActions.clickFinishButton();

        expect(await checkoutActions.completeOrderMessage()).toContain('Thank you for your order!');

    })

    it("Should Reset App and Logout Successfully ",async ()=>{
        await hamburgerActions.clickHamburgerMenu();
        await hamburgerActions.clickResetAppState();
        await hamburgerActions.clickLogout();
    })
})