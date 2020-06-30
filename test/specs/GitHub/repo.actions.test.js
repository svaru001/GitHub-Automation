import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
describe('Git Repository Page Tests', ()=> {
    
    before(()=>{
        LoginPage.login();
        RepoPage.open()
    })
    it('should open repo page', () => {
        expect(RepoPage.repoName).toBeVisible();
    })
    it('should star a repository', () => {
        setPrerequisite()
        RepoPage.unstarredFormButton.click()
        expect(RepoPage.starredForm).toBeDisplayed()
    })
    it('should unstar a repository', () => {
        RepoPage.starredFormButton.click()
        expect(RepoPage.unstarredForm).toBeDisplayed()
    })
    it('should search file in repository', () => {
        RepoPage.goToPageButton.click()
        RepoPage.fileSearchInput.setValue('.gitignore')
        expect(RepoPage.searchResult).toHaveText('.gitignore')
    })
})


const setPrerequisite = (() => {
    if(RepoPage.starredForm.isDisplayed()){
        RepoPage.starredFormButton.click()
    }
})