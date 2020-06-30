import Page from './page'

class RepoPage extends Page {

  get authorName() { return $('.author a'); }
  get repoName() { return $('span.author ~ strong a'); }
  get starCount() { return $('a[aria-label*="this repository"]')}
  get starCaption() {return $('.starring-container button svg')}
  get starredForm(){return $('form.starred.js-social-form')}
  get starredFormButton() {return $('form.starred.js-social-form button[type=\'submit\']')}

  get unstarredForm(){return $('form.unstarred.js-social-form')}
  get unstarredFormButton(){return $('form.unstarred.js-social-form button[type=submit]')}

  get goToPageButton() {return $('div.file-navigation > a')}
  get fileSearchInput() {return $('input.tree-finder-input')}
  get searchResult() {return $('span.js-tree-browser-result-path')}

  get totalReleases() {return $('//a[contains(.,\'Releases\')]/span')}
  get latestRelease() {return $('//a[contains(.,\'Releases\')]//parent::h2//following-sibling::a/div//span') }

  open() {
    let fs, url;
    fs = require('fs');
    url = fs.readFileSync('data/repoUrl.txt', 'utf8');
    super.open(url)
  }

  waitForRepoPageToLoad() {
    if (!this.authorName.isDisplayed()) {
      this.authorName.waitForDisplayed(5000);
    }
  }
  is404Displayed(){
    if(browser.getTitle().includes('Page not found'))
    return true
    else return false
  }
}
export default new RepoPage()
