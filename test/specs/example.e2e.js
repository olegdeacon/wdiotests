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

    it('fails if invalid email provided', () => {
        LoginPage.setLogin('riyom@heroulo.com');
        LoginPage.setPassword('112233');
        LoginPage.clickSubmitButton();
        LoginPage.errorAuthFailedAppeared();
    })

    it('fails if invalid password provided', () => {
        LoginPage.setLogin('riyom19338@heroulo.com');
        LoginPage.setPassword('112236');
        LoginPage.clickSubmitButton();
        LoginPage.errorAuthFailedAppeared();
    })

    it('error message appears by entering not a valid email', () => {
        LoginPage.setLogin('riyom@heroulocom');
        LoginPage.setPassword('112233');
        LoginPage.errorNotValidEmailAppeared();

    })

    it('error message appears by entering email and emptying the field', () => {
        LoginPage.setLogin('riyom@heroulo.com');
        LoginPage.clearActiveField('riyom@heroulo.com');
        browser.pause(2000);
        LoginPage.errorEmailRequiredAppeared();

    })

    it('error message appears by entering password and emptying the field', () => {
        LoginPage.setLogin('riyom@heroulo.com');
        LoginPage.setPassword('112233');
        LoginPage.clearActiveField('112233');
        LoginPage.errorPasswordRequiredAppeared();

    })

    it('submit button is disabled if password was deleted', () => {
        LoginPage.setLogin('riyom@heroulo.com');
        LoginPage.setPassword('112233');
        LoginPage.clearActiveField('112233');
        LoginPage.submitButtonIsDisabled();

    });

    it('submit button is disabled if email was absent', () => {
        LoginPage.setLogin('riyom@heroulo.com');
        LoginPage.clearActiveField('riyom@heroulo.com');
        LoginPage.setPassword('112233');

        LoginPage.submitButtonIsDisabled();
    });

});

