module.exports = (api, options, rootOptions) => {
    api.extendPackage({
      devDependencies: {
        "axios": "^0.19.2",
        "esaier-axios": "^0.0.12"
      }
    });
  
    // Render vuetify plugin file
    api.render(
      {
        "./src/plugins/axios.js": "./templates/plugins/esaier-axios.js"
      },
      options
    );
  
    const helpers = require('./helpers')(api)
  
    // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
    api.onCreateComplete(() => {
      // Modify main.js
      helpers.updateMain(src => {
        let vueImportIndex = src.findIndex(line => line.match(/^import Vue/));
  
        let axiosImportIndex = src.findIndex(line => line.match(/\/plugins\/esaier-axios/));
        if(axiosImportIndex < 0){
          src.splice(++vueImportIndex, 0, "import './plugins/esaier-axios'");
        }      
        return src;
      });
    });
  };
  