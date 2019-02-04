
var Base = require("/Users/daniyarmokeev/Desktop/automation scripts/paintcalculator/Utilities/base.js");
var appData = require("/Users/daniyarmokeev/Desktop/automation scripts/paintcalculator/TestData/app.json");
var homePage = require("/Users/daniyarmokeev/Desktop/automation scripts/paintcalculator/Pages/homepage.js");
var calc_table = require("/Users/daniyarmokeev/Desktop/automation scripts/paintcalculator/Pages/calc_table.js");
var EC = protractor.ExpectedConditions;

describe('PaintCalculator', () => {
   
       
        beforeEach(function() {
        Base.navigateToHome();
        
        });
        it('should verify the header of the page',function(){
            homePage.header.getText().then(function(text){
            expect(text).toEqual("Calculating Paint Required");
            })  
        })
        
        it("should verify the requirements for calculation",function(){
             homePage.requirement.getText().then(function(text){
             expect(text).toEqual("1 gallon of paint is required for every 400ft of surface.");
             })
        })
        //user should give inputs
        it("should verify that the user should give inputs",function(){
         calc_table.inputcell.sendKeys('3');
         calc_table.submitBtn.click();
        
       /////
    
       
       ////
         var myElement = element(by.xpath("//table[@name='Results']"));
        expect(myElement.isPresent()).toBeFalsy();    

        })

      
                
        it("should verify the result of the given data",function(){
            element(by.xpath("//input[@name='rooms']")).sendKeys('3');
            element(by.xpath("//input[@type='submit']")).click();
                // element(by.xpath("(//input[@type='number'])[1]")).sendKeys(appData.data.room1L);
                
                for(let i = 1; i < 9 ; i++){
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room1L);    i++; 
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room1W);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room1H);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room2L);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room2W);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room2H);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room3L);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room3W);    i++;
                        element(by.xpath('(//input[@type="number"])['+i+']')).sendKeys(appData.data.room3H);    i++;
                    }    
                    element(by.css("input[type='submit'] ")).click();
                    browser.wait(EC.presenceOf(element(by.xpath("//div[@class='container']/h5"))),5000); 
                    element(by.xpath("//div[@class='container']/h5")).getText().then(function(text){
            
                        var result = text.split(" ")
                        //console.log(result[result.length-1]) //lets suppose developers put the data into the last sentence always, so that my code can be dynamic
                        expect(result[result.length-1]).toBe(appData.result.number)
                    })
                  
                   
                    
                 
           })
         
        
         
                    
                  
           
        
    
});