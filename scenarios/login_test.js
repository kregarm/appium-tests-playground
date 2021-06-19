Feature('Login with invalid credentials');

Scenario('Try to login with invalid credentials', ({ I, welcomePage, loginPage }) => {
    // Go to login Page
    I.tap(welcomePage.loginButton);
    I.waitForVisible('Password');

    loginPage.fillLoginForm('m@c.com', 'test123')

    // Verify that Login failed message is visible
    I.waitForElement(loginPage.alertElement);
    I.see('Login failed');
});