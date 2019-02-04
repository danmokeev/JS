var Base = function(){
   
    this.homeurl = ('http://127.0.0.1:5000/?');
    
    this.navigateToHome = function(homeurl){
        browser.ignoreSynchronization = true;
        browser.get(this.homeurl);
    }
 }
    
    module.exports = new Base();
    