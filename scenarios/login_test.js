Feature('Login with invalid credentials');

Scenario('Try to login with invalid credentials', ({ I, welcomePage, loginPage }) => {
    I.waitForVisible(welcomePage.welcomeText, 10);
    I.tap(welcomePage.loginButton);
    I.waitForVisible('Password');
    I.appendField(loginPage.emailField, 'm@c.com');
    I.tap(loginPage.passwordField);
    I.fillField(loginPage.passwordField, 'test123');
    I.hideDeviceKeyboard();
    I.tap(loginPage.loginButton);
    I.waitForElement(loginPage.alertElement);
    I.see('Login failed');
});