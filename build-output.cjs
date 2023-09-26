const { registerTransforms } = require('@tokens-studio/sd-transforms');
const { transforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

const { transformDimension } = require('@tokens-studio/sd-transforms');

registerTransforms(StyleDictionary);


// StyleDictionary.registerTransform({
//     name: 'my/size/px',
//     type: 'value',
//     transitive: true,
//     matcher: token => ['fontSizes', 'dimension', 'borderRadius', 'spacing'].includes(token.type),
//     transformer: token => transformDimension(token.value),
// });

// StyleDictionary.registerTransformGroup({
//     name: 'tokens-studio',
//     transforms: [...transforms, 'name/cti/camel'].filter(transform => transform !== 'ts/size/px'),
//  });


const sd = StyleDictionary.extend({
    "source": [
        "**/*.json"
      ],
      "platforms": {
        "css": {
          "buildPath": "token-build/css/",
          "prefix": "sd",
          "transformGroup": "tokens-studio",
          "files": [
            {
              "destination": "variables.css",
              "format": "css/variables"
            }
          ]
        },
        "js": {
          "buildPath": "token-build/js/",
          "transformGroup": "tokens-studio",
          "files": [
            {
              "destination": "variables.js",
              "format": "javascript/es6"
            }
          ]
        }
      }
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();



