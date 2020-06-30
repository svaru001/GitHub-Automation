import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
const assert = require('assert');

describe('Commit/Branches/Tags actions tests', ()=> {
    
    before(()=>{
        LoginPage.login();
        RepoPage.open()
    })

    it('Commits count should be displayed', () => {
        expect(RepoPage.commitsCount).toBeDisplayed();
    })
    it('Number of branches hould be displayed', () => {
        expect(RepoPage.branchesCount).toBeDisplayed();
    })
    it('Number of tags should be displayed', () => {
        expect(RepoPage.tagsCount).toBeDisplayed();
    })
    it('when click on commits, should redirect to commits/master', () => {
        RepoPage.commitsCount.click()
        assert.equal(browser.getUrl().includes('commits/master'),true)
        browser.saveScreenshot('data/screenshots/when click on commits, should redirect to commits master.png')
        RepoPage.open()
    })
    it('when click on branches, should redirect to /branches', () => {
        RepoPage.branchesCount.click()
        assert.equal(browser.getUrl().includes('branches'),true)
        browser.saveScreenshot('data/screenshots/when click on branches, should redirect to branches.png')
        RepoPage.open()
    })
    it('when click on tags, should redirect to /tags', () => {
        RepoPage.tagsCount.click()
        assert.equal(browser.getUrl().includes('tags'),true)
        browser.saveScreenshot('data/screenshots/when click on tags, should redirect to tags page.png')
        RepoPage.open()
    })
})

