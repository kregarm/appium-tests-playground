Feature('Password validator and strentgh test');

Scenario('Password strentgh validator - short password', ({ I, welcomePage, createAccountPage }) => {
    I.waitForVisible(welcomePage.welcomeText, 10);
    I.tap(welcomePage.registerButton);
    I.appendField(createAccountPage.emailField, 'm@c.com');
    I.tap(createAccountPage.passwordField);
    I.fillField(createAccountPage.passwordField, 'test123');
    I.hideDeviceKeyboard();
    I.tap(createAccountPage.createAccountButton)
    I.see('Your password should be at least 8 characters long.')
});

Scenario('Password strentgh validator - weak password', ({ I, welcomePage, createAccountPage }) => {
    I.waitForVisible(welcomePage.welcomeText, 10);
    I.tap(welcomePage.registerButton);
    I.waitForVisible('Password');
    I.fillField(createAccountPage.passwordField, 'test1234');
    I.tap(createAccountPage.emailField);
    I.see('Password strength: Weak')
});