import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
const assert = require('assert');

describe('Repo Navigation Bar testcases', () => {

    before(() => {
        LoginPage.login();
        RepoPage.open()
    })
    it('Should redirect to Issues from navigation bar', () => {
        RepoPage.navBarIssuesBtn.click()
        assert.equal(browser.getUrl().includes('issues'), true)
        RepoPage.open()
    })
    it('Should redirect to Pull requests from navigation bar', () => {
        RepoPage.navBarPullRequestsBtn.click()
        assert.equal(browser.getUrl().includes('pulls'), true)
        
        RepoPage.open()
    })
    it('Should redirect to Actions from navigation bar', () => {
        RepoPage.navBarActionsBtn.click()
        assert.equal(browser.getUrl().includes('actions'), true)
        RepoPage.open()
    })
    it('Should redirect to Projects from navigation bar', () => {
        RepoPage.navBarProjectsBtn.click()
        assert.equal(browser.getUrl().includes('projects'), true)
        RepoPage.open()
    })
    it('Should redirect to Security from navigation bar', () => {
        RepoPage.securityLink.click()
        assert.equal(browser.getUrl().includes('security'), true)
        RepoPage.open()
    })
    it('Should redirect to Insights from navigation bar', () => {
        RepoPage.navBarInsightsBtn.click()
        assert.equal(browser.getUrl().includes('pulse'), true)
        RepoPage.open()
    })
})

