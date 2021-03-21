import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('riyom19338@heroulo.com');
        LoginPage.setPassword('P@role!');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


