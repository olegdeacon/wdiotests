import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach( () => {
        LoginPage.open();
    });

    afterEach( () => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin('riyom19338@heroulo.com');
        LoginPage.setPassword('112233');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided', () => {
        LoginPage.setLogin('riyom@heroulo.com');
        LoginPage.setPassword('112233');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    })


});


