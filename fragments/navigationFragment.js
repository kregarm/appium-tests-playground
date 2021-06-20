const { I } = inject();
module.exports = {

  // Selectors
  root: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout',
  portfolioButton: '//android.widget.FrameLayout[@content-desc=", tab, 1 out of 5"]',
  marketOverviewButton: '//android.widget.FrameLayout[@content-desc=", tab, 2 out of 5"]',
  priceAlertsButton: '//android.widget.FrameLayout[@content-desc=", tab, 3 out of 5"]',
  transactionHistoryButton: '//android.widget.FrameLayout[@content-desc=", tab, 4 out of 5"]',
  settingsButton: '//android.widget.FrameLayout[@content-desc=", tab, 5 out of 5"]',


  // Methods
  navigateTo(page) {
    let navigationButton;

    switch(page) {
        case 'portfolio':
            navigationButton = this.portfolioButton;
            break;
        case 'marketOverview':
            navigationButton = this.marketOverviewButton;
            break;
        case 'priceAlerts':
            navigationButton = this.priceAlertsButton;
            break;
        case 'transactonHistory':
            navigationButton = this.transactionHistoryButton;
            break;
        case 'settings':
            navigationButton = this.settingsButton;
            break;
        default:
            throw new Error(`page ${page} doesn't exist`)
    };

    I.tap(navigationButton);
    // Add I.waitForVisible for different cases
  }
}