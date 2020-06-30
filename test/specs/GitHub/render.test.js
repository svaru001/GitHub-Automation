import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
const assert = require('assert');

describe('Rendering Tests', ()=> {
    
    before(()=>{
        LoginPage.login();
        RepoPage.open()
    })

    it('README.md file should be rendered', () => {
        RepoPage.readmeRenderBox.scrollIntoView()
        expect(RepoPage.readmeRenderBox).toBeDisplayed();
    })
    it('footer link Terms should be rendered', () => {
        RepoPage.termsLink.scrollIntoView()
        expect(RepoPage.termsLink).toBeDisplayed();
    })
    it('footer link Privacy should be rendered', () => {
        RepoPage.privacyLink.scrollIntoView()
        expect(RepoPage.privacyLink).toBeDisplayed();
    })
    it('footer link Security should be rendered', () => {
        RepoPage.securityLink.scrollIntoView()
        expect(RepoPage.securityLink).toBeDisplayed();
    })
})

