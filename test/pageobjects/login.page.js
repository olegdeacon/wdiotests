import Page from './page';

class LoginPage extends Page {
    get inputUsername () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get buttonSubmit () { return $('.login-form-button') }
    get errorAuthFaild () { return $('.ant-notification-notice-message') }
    get errorNotValidEmail () { return $('//*[@id="normal_login"]/div[1]/div/div[2]/div') }
    get errorEmailRequired () { return $('//*[@id="normal_login"]/div[1]/div/div[2]/div') }
    get errorPasswordRequired () { return $('//*[@id="normal_login"]/div[2]/div/div[2]/div') }

    open () {
        return super.open('/');
    }

    setLogin (email) {
        this.inputUsername.setValue(email);
    }

    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton () {
        this.buttonSubmit.click();
    }

    clearActiveField(str) {
        let bs = Array(Math.ceil(str.length)).fill('Backspace');
        browser.keys(bs);
    }

    submitButtonIsDisabled() {
        expect(this.buttonSubmit).toBeDisabled();
    }

    errorAuthFailedAppeared() {
        expect(this.errorAuthFaild).toBeDisplayed();
    }

    errorNotValidEmailAppeared() {
        expect(this.errorNotValidEmail).toBeDisplayed();
    }

    errorEmailRequiredAppeared() {
        expect(this.errorEmailRequired).toBeDisplayed();
    }

    errorPasswordRequiredAppeared() {
        expect(this.errorPasswordRequired).toBeDisplayed();
    }
}

export default new LoginPage();
