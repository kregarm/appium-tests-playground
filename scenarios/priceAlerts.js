Feature('Add price alerts');

Before( async ({ I, loginPage }) => {
    await I.login(loginPage);
  });

let currencies = new DataTable(['currency']);
const allCurrencies = ['BTC', 'ETH', 'LTC', 'XRP', 'BCH'];

allCurrencies.forEach(element => currencies.add([element]));

Data(currencies).Scenario('Add a price alert', async ({ I, priceAlertsPage, navigationBar, current }) => {
  await navigationBar.navigateTo('priceAlerts');
  await priceAlertsPage.addPriceAlert(current.currency);
});