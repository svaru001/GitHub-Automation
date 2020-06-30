import Page from './page'

class SearchPage extends Page {

  get searchInput() { return $('input.header-search-input'); }
  get fullSearchResults() {return $$('li.repo-list-item div a')}
  get firstSearchResult() {return $('li.repo-list-item div a')}
  get searchTypeAll() {return $('div.js-jump-to-badge-search span[aria-label="in all of GitHub"]')}
  open(url) {
    super.open('/')
  }
  hitSearchEnter() { browser.keys("\uE007"); }
  waitForSearchPageToLoad() {
  }
}
export default new SearchPage()
