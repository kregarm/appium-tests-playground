const { I } = inject();

module.exports = {
    // Locators
    newPriceAlertButton: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView',
    currencyLabelInHeader: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]',
    currencyPicker: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]',
    currencyListView: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView',
    currencyPriceLabel: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[8]',
    BTCSelector: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]',
    ETHSelector: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]',
    LTCSelector: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]',
    XRPSelector: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[5]',
    BCHSelector: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[6]',
    saveAlertButton: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[8]',
    alertContainer: '#de.bisonapp:id/llAlertTextContainer',
    currencyLabelListInAlertsListView: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup',

    // Methods
    addPriceAlert(currency){
        let currencySelector;
        let currencyFullName;

        switch(currency) {
            case 'BTC':
                currencySelector = this.BTCSelector;
                currencyFullName = 'Bitcoin';
                break;
            case 'ETH':
                currencySelector = this.ETHSelector;
                currencyFullName = 'Ethereum';
                break;
            case 'LTC':
                currencySelector = this.LTCSelector;
                currencyFullName = 'Litecoin';
                break;
            case 'XRP':
                currencySelector = this.XRPSelector;
                currencyFullName = 'Ripple';
                break;
            case 'BCH':
                currencySelector = this.BCHSelector;
                currencyFullName = 'Bitcoin Cash';
                break;
            default:
                throw new Error(`currency ${currency} not yet implemented`)
        };

        // Add a new price alert
        I.waitForVisible(this.newPriceAlertButton);
        I.tap(this.newPriceAlertButton);

        // Select currency
        I.tap(this.currencyPicker);
        I.waitForVisible(this.currencyListView);
        I.tap(currencySelector);
        I.waitForText(currencyFullName, 10, this.currencyLabelInHeader);

        // Swipe up to save button and tap it
        I.swipeUp(this.currencyPriceLabel);
        I.waitForVisible(this.saveAlertButton);
        I.tap(this.saveAlertButton);

        // Verify that a new alert was sucessfully added
        //I.waitForVisible(this.alertContainer); // debug this
        //I.see('Successfully saved price alert', this.alertContainer);
        I.see(currency);
    }
}
