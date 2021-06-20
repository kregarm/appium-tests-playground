Feature('Add price alerts');

Before( async ({ I, loginPage }) => {
    await I.login(loginPage);
  });

let currencies = new DataTable(['currency']);
const allCurrencies = ['BTC', 'ETH', 'LTC', 'XRP', 'BCH'];

allCurrencies.forEach(element => currencies.add([element]));

Data(currencies).Scenario('Add a price alert', async ({ I, priceAlertsPage, current }) => {
  I.tap('//android.widget.FrameLayout[@content-desc=", tab, 3 out of 5"]');
  await priceAlertsPage.addPriceAlert(current.currency);
});