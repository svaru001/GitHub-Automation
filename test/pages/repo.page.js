import Page from './page'

class RepoPage extends Page {

  get authorName() { return $('.author a'); }
  get repoName() { return $('span.author ~ strong a'); }
  get starCount() { return $('a[aria-label*="this repository"]') }
  get starCaption() { return $('.starring-container button svg') }
  get starredForm() { return $('form.starred.js-social-form') }
  get starredFormButton() { return $('form.starred.js-social-form button[type=\'submit\']') }

  get unstarredForm() { return $('form.unstarred.js-social-form') }
  get unstarredFormButton() { return $('form.unstarred.js-social-form button[type=submit]') }

  get goToPageButton() { return $('div.file-navigation > a') }
  get fileSearchInput() { return $('input.tree-finder-input') }
  get searchResult() { return $('span.js-tree-browser-result-path') }

  get totalReleases() { return $('//a[contains(.,\'Releases\')]/span') }
  get latestRelease() { return $('//a[contains(.,\'Releases\')]//parent::h2//following-sibling::a/div//span') }

  get commitsCount() { return $('//span[contains(text(),\'commits\')]//parent::span/strong') }
  get branchesCount() { return $('svg.octicon-git-branch + strong') }
  get tagsCount() { return $('svg.octicon-tag + strong') }
  get readmeRenderBox() { return $('div#readme') }
  get footerGitInc() { return $('li*=2020 GitHub, Inc.') }
  get termsLink() { return $('a=Terms') }
  get privacyLink() { return $('a=Privacy') }
  get securityLink() { return $('a[href="https://github.com/security"]') }

  get navBarCodeBtn() { return $('//span[contains(.,\'Code\')]//parent::a') }
  get navBarIssuesBtn() { return $('//span[contains(.,\'Issues\')]//parent::a') }
  get navBarPullRequestsBtn() { return $('//span[contains(.,\'Pull requests\')]//parent::a') }
  get navBarActionsBtn() { return $('//span[contains(.,\'Actions\')]//parent::a') }
  get navBarProjectsBtn() { return $('//span[contains(.,\'Projects\')]//parent::a') }
  get navBarWikiBtn() { return $('//span[contains(.,\'Wiki\')]//parent::a') }
  get navBarSecurityBtn() { return $('//span[contains(.,\'Security\')]//parent::a') }
  get navBarInsightsBtn() { return $('//span[contains(.,\'Insights\')]//parent::a') }

  open() {
    let fs, url;
    fs = require('fs');
    url = fs.readFileSync('data/repoUrlDefault.txt', 'utf8');
    super.open(url)
  }
  userInputRepoOpen() {
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
  is404Displayed() {
    if (browser.getTitle().includes('Page not found'))
      return true
    else return false
  }
}
export default new RepoPage()
