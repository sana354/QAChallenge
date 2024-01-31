const { defineConfig } = require("cypress")
const cucumber = require("cypress-cucumber-preprocessor").default
const {rm} = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber()); 
      
      on ('task' , {
        deleteFolder (folderName) {
          return new Promise ((resolve, reject) =>{
            rm(folderName, { maxRetries: 10, recursive: true}, (err)=> {
          
              if (err) {
              console.error(err)
         }
            resolve(null)
         })

          })
       
        }
      })
},
    baseUrl: 'https://app.crewmeister.com',
    specPattern: "cypress/e2e/FunctionalTests/Tests/features/*.feature",
    experimentalRunAllSpecs: true,
    
      viewportWidth: 1920,
      viewportHeight: 1080,
         
    
  },

  
  
});
