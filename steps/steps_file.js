module.exports = function() {
  return actor({
    login: async function(loginPage){
      // Go to login page
      this.tap('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView');
      this.waitForVisible('Password');
      loginPage.fillLoginForm(process.env.BISON_USERNAME, process.env.BISON_PASSWORD)

      // Verify visibility of bottom navbar
      this.waitForVisible('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout')
    }
  });
}
