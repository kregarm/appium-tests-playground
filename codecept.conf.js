const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config({ path: '.env' });

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './scenarios/*_test.js',
  output: './output',
  helpers: {
    Appium: {
        platform: "Android",
        desiredCapabilities: {
          app: '/Users/martinkregar/Documents/bizon/bison.apk',
          platformName: 'Android',
          deviceName: 'Android Emulator',
          platformVersion: '10',
          automationName: 'UiAutomator2'
        }
    },
    emailHelper: {
      require:  './helpers/emailHelper.js'
    },
    REST: {
      timeout: 100000
    }
  },
  include: {
    I: './steps/steps_file.js',
    welcomePage: './pages/welcomePage.js',
    loginPage: './pages/loginPage.js',
    createAccountPage: './pages/createAccountPage.js',
    emailVerificationPage: './pages/emailVerificationPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'bizon',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}