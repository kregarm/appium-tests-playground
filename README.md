Repo contains basic Appium tests for Bison app - Android only for now.

# SETUP
1. Download, install and configure [Android Studio](https://developer.android.com/studio)
2. Setup a virtual device (currently set to Android 10)
3. Donwload, install and run [Appium](https://appium.io/docs/en/about-appium/getting-started/?lang=en)
4. Clone this repo, cd into it and install it's dependencies with `npm install`
5. Create a [testmail.app](https://testmail.app) account
6. Create a `.env` file:
```
EMAIL_API_ROOT=https://api.testmail.app/api/json
EMAIL_API_KEY=<your api key>
EMAIL_API_NAMESPACE=<your api namespace>
BISON_USERNAME=<production username>
BISON_PASSWORD=<production password>
```
7. Run tests with `npm run test-e2e`

# Adding new tests
## Page Objects
This implementation follows the standard [Page Object Pattern](https://codecept.io/pageobjects/#page-objects). For every new screen/page create
it's own accompanying file in `/pages/<pageName.js>`. It should hold all selectors and methods relevant to that screen.
Page Objects must be added to the `codecept.conf.js` file, under `include` section.
## Page Fragments
Additionally, we utilise the [Page Fragment Pattern](https://codecept.io/pageobjects/#page-fragments). Technically they are the same, but they differ 
conceptually. Add a new fragmenet to `/fragments/<fragmentName.js>` every time you need access to common components found on multiple screens - headers, 
footers, navbars etc.
Page Fragments must be added to the `codecept.conf.js` file, under `include` section.
## Data driven tests
If you need to perfrom the same test on a data set, use the proposed [Data Driven Tests Pattern](https://codecept.io/advanced/#data-driven-tests).
Create an array in the `/data/<dataSet.js>` folder and include it in your tests:
```
Feature('<feature name>');

let dataSet = new DataTable(['tableName']);
const data = require('./../data/<dataSet>.js');

data.forEach(element => currencies.add([element]));

Data(dataSet).Scenario('<scenarioName>', async ({ I, current }) => {
  <your tests>
});
```
You have access to your data through the `current` object.
