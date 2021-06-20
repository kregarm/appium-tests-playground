Feature('Registration');

Scenario('Register new user', async ({ I, welcomePage, createAccountPage, emailVerificationPage, loginPage }) => {
    const emailAddress = await I.generateUniqueEmailAddress();
    console.log(`Using email address ${emailAddress.email} and tag ${emailAddress.tag}`);

    // Navigate to create account page
    I.tap(welcomePage.registerButton);
    I.waitForVisible('Password');

    // Fill and submit form
    createAccountPage.fillCreateAccounForm(emailAddress.email, 'Test1234.')

    // Verify the verification screen is shown
    I.see(emailVerificationPage.expectedText);
    I.see(emailAddress.email)
    I.seeElement(emailVerificationPage.envelopeIcon);

    // Extract link to verify account
    const mails = await I.sendGetRequest(`${process.env.EMAIL_API_ROOT}?apikey=${process.env.EMAIL_API_KEY}&namespace=${process.env.EMAIL_API_NAMESPACE}&tag=${emailAddress.tag}&livequery=true`);
    const verificationLink = await I.extractLoginConfirmationLink(mails.data.emails[0].html);

    // Verify account
    I.sendGetRequest(verificationLink);

    // Back to login screen 
    I.tap(emailVerificationPage.backButton);
    I.waitForVisible(welcomePage.welcomeText);

    // Go to login page - REGISTER and LOGIN button swithced places
    I.tap(welcomePage.registerButton);

    // Verify email is prefilled
    I.see(emailAddress.email);

    // Enter password and press login
    loginPage.fillLoginForm(null, 'Test1234.')

    // Verify sucessful login
    I.waitForVisible('Portfolio');
});
