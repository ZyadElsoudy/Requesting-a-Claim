const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout:120000,

    projectId: 'ybej3v',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    "chromeWebSecurity": false,
    "viewportHeight": 1080,
    "viewportWidth": 1920,
    
    
  },
  
});
