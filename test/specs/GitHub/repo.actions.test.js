import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
describe('Git Repository Page Tests', ()=> {
    
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
    it('should search file in repository', () => {
        RepoPage.goToPageButton.click()
        RepoPage.fileSearchInput.setValue('.gitignore')
        expect(RepoPage.searchResult).toHaveText('.gitignore')
        browser.saveScreenshot('data/screenshots/should search file in repository.png')

    })
})


const setPrerequisite = (() => {
    if(RepoPage.starredForm.isDisplayed()){
        RepoPage.starredFormButton.click()
    }
})