import loginObjects from '../pageObjects/login/loginObjects';
import loginActions from '../pageObjects/login/loginActions';

describe('Verify the error message', () => {


    it('should show an error message with empty username and password ', async () => {

        await loginActions.loginFunction('', '');
        const errorMessage = await loginObjects.errorMessage;

        await expect(errorMessage).toHaveText('Epic sadface: Username is required');

    });


    it('should show an error message with empty password ', async () => {

        await loginActions.loginFunction('locked_out_user', '');
        const errorMessage = await loginObjects.errorMessage;

        await expect(errorMessage).toHaveText('Epic sadface: Password is required');

    });

    it('should show an error message  locked_out_user and Invalid password credentials', async () => {

        await loginActions.loginFunction('locked_out_user', 'sauce');
        const errorMessage = await loginObjects.errorMessage;

        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

    });

    it('should show an error message  locked_out_user and valid password credentials', async () => {

        await loginActions.loginFunction('locked_out_user', 'secret_sauce');
        const errorMessage = await loginObjects.errorMessage;

        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');

    });

})

