const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //reporter: 'junit',
  video: true,
videoCompression: 32,
//videoUploadOnPasses: true,
reporter: 'cypress-mochawesome-reporter', //for HTML Report
  reporterOptions: {
    reportDir: 'cypress/reporters', //setting the direction
    overwrite: true,
    html: true,
    json: false,
  },
  defaultCommandTimeout: 60000,
  pageLoadTimeout:120000,
  //reporter: 'reporters/custom.js',
  projectId: 'ybej3v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /*on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          )
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video)
          }
        }
      })*/
    
     require('cypress-mochawesome-reporter/plugin')(on);
     
    },
    "chromeWebSecurity": false,
    "viewportHeight": 1080,
    "viewportWidth": 1920,
    "browser":"Chrome"
    
    
  },
  
});
