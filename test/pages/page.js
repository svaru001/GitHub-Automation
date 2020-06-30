export default class Page {
    open (path) {
      browser.url(path)
    }
    scrollUntillElementExist(ele){
      
      while(ele.isExisting()==false){
          browser.keys(['meta','\uE00F'])
      }
  }
  }
  