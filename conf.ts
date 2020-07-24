import {Config,browser} from "protractor"
import 'jasmine'
import JasminHtmlReporter from "protractor-jasmine2-html-reporter";
import AllureReporter from "jasmine-allure-reporter";
//import CherCherTechJasmineReporter from "chercher-tech-jasmine-reporter";
//import HtmlReporter from "protractor-beautiful-reporter";
JasminHtmlReporter();
AllureReporter();
//CherCherTechJasmineReporter();
//HtmlReporter();


export let config: Config = {
    framework : "jasmine2",
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    jasmineNodeOpts:{
        showColors : true,        // Use Colors in command line tool
       // silent : true,
        defaultTimeoutInterval : 250000,
        //print: function(){}
    },
    //SELENIUM_PROMISE_MANAGER: false,

    // Capability to be passed to the webdriver instance.
    capabilities:{
        browserName : 'chrome',
        //chromeOptions : {'args':['disable-infobars']},
       // acceptSslCerts : true
    },
    // suites : {
    //     login : './testspecs/login.js'    // to run each suite    protractor conf.js login
    // },

    specs:['./testspecs/login.js'],
    //SELENIUM_PROMISE_MANAGER : false,
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect : true,
    onPrepare: async function() {
        await browser.manage().window().maximize();
           // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
           
           browser.getProcessedConfig().then(function(config){
            var capabilities = config.capabilities;
          // var CherCherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
          //  console.log (capabilities.browserName);
          
           //jasmine.getEnv().addReporter(new AllureReporter({
           // jasmine.getEnv().addReporter(new CherCherTechJasmineReporter({

            jasmine.getEnv().addReporter(new JasminHtmlReporter({
            takeScreenshots: 'true',
            takeScreenshotsOnlyOnFailures: 'true',
            savePath: './reports',
            screenshotsFolder: 'screenshot',
            fileName: 'WebAppAutomationTestReport_Chrome',
            showSummary: 'true',
            showQuickLinks: 'true',
            showConfiguration: 'true'
          
      
          }));
        })
          }
   
}