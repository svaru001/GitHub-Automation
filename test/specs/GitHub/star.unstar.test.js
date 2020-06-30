import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
describe('Star / unstar repository', ()=> {
    
    before(()=>{
        LoginPage.login();
        RepoPage.open()
    })
    it('should open repo page', () => {
        expect(RepoPage.repoName).toBeVisible();
        browser.saveScreenshot('data/screenshots/should open repo page.png')
    })
    it('should star a repository', () => {
        setPrerequisite()
        RepoPage.unstarredFormButton.click()
        expect(RepoPage.starredForm).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/should star a repository.png')

    })
    it('should unstar a repository', () => {
        RepoPage.starredFormButton.click()
        expect(RepoPage.unstarredForm).toBeDisplayed()
        browser.saveScreenshot('data/screenshots/should unstar a repository.png')

    })
})


const setPrerequisite = (() => {
    if(RepoPage.starredForm.isDisplayed()){
        RepoPage.starredFormButton.click()
    }
})