import RepoPage from '../../pages/repo.page'

describe('It should test for git url', ()=> {
    
    before(()=>{
        RepoPage.open();    
    })
    it('should fetch required data', () => {
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
    })
})