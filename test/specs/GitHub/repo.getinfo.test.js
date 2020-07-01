import RepoPage from '../../pages/repo.page'
import LoginPage from '../../pages/login.page'
const assert = require('assert');

describe('retrieve repo infomration for given url', ()=> {
    
    before(()=>{
        LoginPage.login();
        RepoPage.userInputRepoOpen()
        browser.pause(500)
        if(RepoPage.is404Displayed()){
            console.log('Uh oh, Looks like you don\'t have access to this repository!')
            assert.equal(0,1,'Uh oh, Looks like you don\'t have access to this repository!')
        }
    })
    
    it('Author name should be visible',() => {
         expect(RepoPage.authorName).toBeExisting();
         browser.saveScreenshot('data/screenshots/Author name should be visible.png')

    });

    it('Repository name should be visible',() => {
        expect(RepoPage.repoName).toBeExisting();
        browser.saveScreenshot('data/screenshots/Repository name should be visible.png')
    });

    it('Star details should be visible',() => {
        expect(RepoPage.starCount).toBeExisting();
        browser.saveScreenshot('data/screenshots/Repository name should be visible.png')
    });

    it('Release details should be visible',() => {
        expect(RepoPage.totalReleases).toBeExisting();
        expect(RepoPage.latestRelease).toBeExisting();
        browser.saveScreenshot('data/screenshots/Repository name should be visible.png')
    });

    it('should fetch required data [Please scroll up for test results]', () => {
        let valuetoprint= '- - - - - - - - - - - - - - - - - - - - - - - - -\n'
        valuetoprint+= RepoPage.authorName.getText()+' / '+ RepoPage.repoName.getText()+'\n \n';
        valuetoprint+='Stars :'+RepoPage.starCount.getText() +'\n';
        if(RepoPage.totalReleases.isExisting()){
        valuetoprint+='Releases :'+RepoPage.totalReleases.getText()+'\n';
        valuetoprint+='Latest Release :'+RepoPage.latestRelease.getText()+'\n';
        }
        else{
            valuetoprint+='Note- Releases/ Release data is not available for this repository\n' ;
        }
        valuetoprint+= '- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n';
        console.log(valuetoprint);
        browser.saveScreenshot('data/screenshots/Repository name should be visible.png')
    })
    
})