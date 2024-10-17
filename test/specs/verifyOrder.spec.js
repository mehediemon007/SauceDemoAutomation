import loginActions from "../pageObjects/login/loginActions";
import hamburgerActions from "../pageObjects/HamburgerMenu/hamburgerActions";
import addToCartActions from "../pageObjects/addToCart/addToCartActions";
import checkoutActions from "../pageObjects/checkout/checkoutActions";
import utilities from "../pageObjects/utilities/utilities";

let n=3;

describe("Add product to Cart and verify Checkout process ", ()=>{


    it('should show an error message  locked_out_user and valid password credentials', async () => {

        await loginActions.loginFunction('standard_user', 'secret_sauce');

    });

    it("Should Reset App after Login", async()=>{

        await hamburgerActions.hamburgerOperation("Reset App State");
    })


    it("Should able to add product on cart successfully", async()=>{
        await addToCartActions.addToCartFunction(n);
        let totalProducts =  Number(await addToCartActions.totalCartProducts());
        expect(totalProducts).toEqual(n);
    })

    it("Should Display Cart Products and Total Amounts Correctly ",async()=>{

        await checkoutActions.checkoutInfos("Mehedi Hasan","Emon",5840);
        expect(await checkoutActions.checkProducts(n)).toEqual("Cart Prodcuts Matched");

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