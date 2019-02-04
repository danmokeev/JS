
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
   framework: 'jasmine',

  directConnect: 'true',

   capabilities: {
       browserName: 'chrome',
       chromeOptions: {
        args:['--window-size=1920,1080']
        
        },
   },
   //make sure you will give the right path to run the test, instructions: copy path of app.spec.js and paste into specs
   specs: ['/Users/daniyarmokeev/Desktop/automation scripts/paintcalculator/Tests/app.spec.js'],

//    suites:{
//      smoke:['../automation scripts/paintcalculator/Tests'],
//      regression:['../Tests//*.spec.js']
//    },

onPrepare: function(){
     //browser.manage().window().maximize();
     jasmine.getEnv().addReporter(new SpecReporter({
       displayFailuresSummary: true,
       displayFailuredSpec: true,
       displaySuiteNumber: true,
       displaySpecDuration: true,
       showstack: false
     }));

     // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
     jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: '/Users/daniyarmokeev/Desktop/automation scripts/paintcalculator/Report',//give the right path to see the reports
       preserveDirectory: false,
       screenshotsSubfolder: 'images',
       jsonsSubfolder: 'jsons',
       docName: 'MGM-Report.html'
    }).getJasmine2Reporter());
   }
}