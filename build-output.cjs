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
    source: ['**/*.tokens.json'],
    platforms: {
        js: {
            transformGroup: 'tokens-studio',
            buildPath: 'token-build/js/',
            files: [
                {
                    destination: 'variables.js',
                    format: 'javascript/es6',
                },
            ],
        },
        css: {
        transforms: [
            'ts/descriptionToComment',
            'ts/size/px',
            'ts/opacity',
            'ts/size/lineheight',
            'ts/typography/fontWeight',
            'ts/resolveMath',
            'ts/size/css/letterspacing',
            'ts/typography/css/fontFamily',
            'ts/typography/css/shorthand',
            'ts/border/css/shorthand',
            'ts/shadow/css/shorthand',
            'ts/color/css/hexrgba',
            'ts/color/modifiers',
            'name/cti/kebab',
        ],
        buildPath: 'token-build/css/',
        files: [
            {
                destination: 'variables.css',
                format: 'css/variables',
            },
        ],
        },
    },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();



