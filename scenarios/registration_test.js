Feature('Registration');

Scenario('Register new user', async ({ I, welcomePage, createAccountPage, emailVerificationPage, loginPage }) => {
const emailAddress = await I.generateUniqueEmailAddress();
    console.log(`Using email address ${emailAddress.email} and tag ${emailAddress.tag}`);

    // Navigate to create account page
    I.waitForVisible(welcomePage.welcomeText, 10);
    I.tap(welcomePage.registerButton);

    // Enter email
    I.appendField(createAccountPage.emailField, emailAddress.email);
    I.tap(createAccountPage.passwordField);

    // Enter password and trigger sending of email
    I.fillField(createAccountPage.passwordField, 'Test1234.');
    I.hideDeviceKeyboard();
    I.tap(createAccountPage.createAccountButton);

    // Verify the verification screen is shown
    I.see(emailVerificationPage.expectedText);
    I.see(emailAddress.email)
    I.seeElement(emailVerificationPage.envelopeIcon);

    // Extract link to verify account
    const mails = await I.sendGetRequest(`${process.env.EMAIL_API_ROOT}?apikey=${process.env.EMAIL_API_KEY}&namespace=${process.env.EMAIL_API_NAMESPACE}&tag=${emailAddress.tag}&livequery=true`);
    const verificationLink = await I.extractLoginConfirmationLink(mails.data.emails[0].html);
    I.sendGetRequest(verificationLink);

    // Back to login screen 
    I.tap(emailVerificationPage.backButton);
    I.waitForVisible(welcomePage.welcomeText, 10);

    // Go to login page - REGISTER and LOGIN button swithced places
    I.tap(welcomePage.registerButton);

    // Verify email is prefilled
    I.see(emailAddress.email);

    // Enter password and press login
    I.tap(loginPage.passwordField);
    I.fillField(loginPage.passwordField, 'Test1234.');
    I.hideDeviceKeyboard();
    I.tap(loginPage.loginButton);

    // Verify sucessful login
    I.waitForVisible('Portfolio', 5);
});
