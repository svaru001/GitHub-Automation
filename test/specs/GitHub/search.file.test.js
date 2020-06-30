import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
describe('Search files in the repository', ()=> {
    
    before(()=>{
        LoginPage.login();
        RepoPage.open()
    })

    it('should search file in repository', () => {
        RepoPage.goToPageButton.click()
        RepoPage.fileSearchInput.setValue('.gitignore')
        expect(RepoPage.searchResult).toHaveText('.gitignore')
        browser.saveScreenshot('data/screenshots/should search file in repository.png')

    })
})

