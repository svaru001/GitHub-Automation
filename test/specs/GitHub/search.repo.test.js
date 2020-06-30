import SearchPage from '../../pages/search.page'
const testData = require('../../../data/searchData.json')
const assert = require('assert');

describe('Search repository by name, verify search results', ()=> {
    testData.forEach(search => {
        it('Search for repo:'+ search['repo']+', from org:'+search['org']+', should return the result on Top', () => {
            SearchPage.open();
            SearchPage.searchInput.setValue(search['repo']);
            SearchPage.hitSearchEnter();
            console.log(SearchPage.firstSearchResult.getText())
            console.log(search['org']+'/'+search['repo'])
            assert.equal(SearchPage.firstSearchResult.getText(),search['org']+'/'+search['repo'])
            browser.saveScreenshot('data/screenshots/'+'Search for repo:'+ search['repo']+', from org:'+search['org']+', should return the result on Top'+'.png');

        });
    });
    
    // it('should search for repository', () => {
    //     SearchPage.open();
    //     SearchPage.searchInput.setValue('appium');
    //     SearchPage.hitSearchEnter()
    //     console.log('XxXXXXXXXXXXXXXX')
    //     SearchPage.searchResults.forEach(test=>{
    //         console.log(test.getText());
    //     });
    //     console.log('XxXXXXXXXXXXXXXX')
    // })
})