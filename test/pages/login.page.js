import Page from './page'
const  cred= require('../../data/cred.json')

class LoginPage extends Page {
  get userNameInput() { return $('input[name=\'login\']') }
  get passwordInput() { return $('input[name=\'password\']') }
  get signInButton() { return $('input[value=\'Sign in\']')}
  get createAnAccountLink() {return $('p.create-account-callout a')}
  get forgotPasswordLink() {return $('//a[contains(.,\'Forgot password?\')]')}
  
  open() {
    super.open('/login')
  }
  login() {
    this.open()
    this.userNameInput.setValue(cred[0]['username'])
    this.passwordInput.setValue(cred[0]['pwd'])
    this.signInButton.click()
  }
  waitForLoginPageToLoad() {
  }
}
export default new LoginPage()