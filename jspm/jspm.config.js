SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  transpiler: "plugin-babel",
  babelOptions: {
    "moduleName": true
  },

  meta: {
    "*.css": {
      "loader": "jspm/css.js"
    },
    "*.hbs": {
      "loader": "hbs"
    }
  },

  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "autoprefixer": "npm:autoprefixer@6.3.3",
    "babel-polyfill": "npm:babel-polyfill@6.6.1",
    "babel-runtime": "npm:babel-runtime@6.6.1",
    "backbone": "npm:backbone@1.2.3",
    "backbone.babysitter": "github:marionettejs/backbone.babysitter@0.1.10",
    "backbone.wreqr": "github:marionettejs/backbone.wreqr@1.3.5",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "cssnano": "npm:cssnano@3.5.2",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "handlebars": "github:components/handlebars.js@4.0.5",
    "hbs": "github:davis/plugin-hbs@1.2.1",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "jquery": "github:components/jquery@2.2.0",
    "jspm-loader-css": "github:MeoMix/jspm-loader-css@master",
    "lodash": "npm:lodash@3.10.1",
    "marionette": "github:marionettejs/backbone.marionette@2.4.4",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.5",
    "postcss-import": "github:MeoMix/postcss-import@master",
    "postcss-inline-trait": "npm:postcss-inline-trait@0.1.0",
    "postcss-mixin-from": "npm:postcss-mixin-from@0.3.0",
    "postcss-mixins": "npm:postcss-mixins@4.0.1",
    "postcss-modules-values": "npm:postcss-modules-values@1.1.1",
    "postcss-nesting": "npm:postcss-nesting@2.3.0",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.4",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "underscore": "npm:underscore@1.8.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },

  packages: {
    "github:MeoMix/jspm-loader-css@master": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
        "cssnano": "npm:cssnano@3.5.2"
      }
    },
    "github:MeoMix/postcss-import@master": {
      "map": {
        "object-assign": "npm:object-assign@4.0.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "read-cache": "npm:read-cache@1.0.0",
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "github:davis/plugin-hbs@1.2.1": {
      "map": {
        "handlebars": "github:components/handlebars.js@4.0.5"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.1.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:ansi-styles@2.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.0.0"
      }
    },
    "npm:argparse@1.0.6": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:array-union@1.0.1": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.2"
      }
    },
    "npm:autoprefixer@6.3.3": {
      "map": {
        "browserslist": "npm:browserslist@1.1.3",
        "caniuse-db": "npm:caniuse-db@1.0.30000420",
        "normalize-range": "npm:normalize-range@0.1.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:babel-polyfill@6.6.1": {
      "map": {
        "babel-regenerator-runtime": "npm:babel-regenerator-runtime@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "core-js": "npm:core-js@2.1.3"
      }
    },
    "npm:babel-runtime@6.6.1": {
      "map": {
        "core-js": "npm:core-js@2.1.3"
      }
    },
    "npm:backbone@1.2.3": {
      "map": {
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:brace-expansion@1.1.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.3.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserslist@1.1.3": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000420"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:clap@1.0.10": {
      "map": {
        "chalk": "npm:chalk@1.1.1"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:color@0.11.1": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:colormin@1.1.0": {
      "map": {
        "color": "npm:color@0.11.1",
        "css-color-names": "npm:css-color-names@0.0.3"
      }
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:css-modules-loader-core@1.0.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.10",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
        "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
      }
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "map": {
        "cssesc": "npm:cssesc@0.1.0",
        "fastparse": "npm:fastparse@1.1.1"
      }
    },
    "npm:cssnano@3.5.2": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.3.3",
        "decamelize": "npm:decamelize@1.2.0",
        "defined": "npm:defined@1.0.0",
        "indexes-of": "npm:indexes-of@1.0.1",
        "object-assign": "npm:object-assign@4.0.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-calc": "npm:postcss-calc@5.2.0",
        "postcss-colormin": "npm:postcss-colormin@2.2.0",
        "postcss-convert-values": "npm:postcss-convert-values@2.3.4",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.0.1",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.5",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.6",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.3",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.1",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.4",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.1.0",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-svgo": "npm:postcss-svgo@2.1.2",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss-zindex": "npm:postcss-zindex@2.0.1"
      }
    },
    "npm:csso@1.4.4": {
      "map": {
        "clap": "npm:clap@1.0.10"
      }
    },
    "npm:glob@6.0.4": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:globby@4.0.0": {
      "map": {
        "array-union": "npm:array-union@1.0.1",
        "arrify": "npm:arrify@1.0.1",
        "glob": "npm:glob@6.0.4",
        "object-assign": "npm:object-assign@4.0.1",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:has-flag@1.0.0": {
      "map": {}
    },
    "npm:inflight@1.0.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:js-base64@2.1.9": {
      "map": {}
    },
    "npm:js-yaml@3.4.6": {
      "map": {
        "argparse": "npm:argparse@1.0.6",
        "esprima": "npm:esprima@2.7.2",
        "inherit": "npm:inherit@2.2.3"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:normalize-url@1.4.1": {
      "map": {
        "object-assign": "npm:object-assign@4.0.1",
        "prepend-http": "npm:prepend-http@1.0.3",
        "query-string": "npm:query-string@3.0.1",
        "sort-keys": "npm:sort-keys@1.1.1"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:pinkie-promise@2.0.0": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:postcss-calc@5.2.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "reduce-css-calc": "npm:reduce-css-calc@1.2.1"
      }
    },
    "npm:postcss-colormin@2.2.0": {
      "map": {
        "colormin": "npm:colormin@1.1.0",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-convert-values@2.3.4": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-discard-empty@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "postcss": "npm:postcss@5.0.19",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-filter-plugins@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "uniqid": "npm:uniqid@1.0.0"
      }
    },
    "npm:postcss-inline-trait@0.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-js@0.1.2": {
      "map": {
        "camelcase-css": "npm:camelcase-css@1.0.1",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-merge-idents@2.1.5": {
      "map": {
        "has-own": "npm:has-own@1.0.0",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-merge-rules@2.0.6": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-minify-font-values@1.0.3": {
      "map": {
        "object-assign": "npm:object-assign@4.0.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-minify-gradients@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-params@1.0.4": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-minify-selectors@2.0.4": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.19",
        "postcss-selector-parser": "npm:postcss-selector-parser@1.3.3"
      }
    },
    "npm:postcss-mixin-from@0.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-mixins@4.0.1": {
      "map": {
        "globby": "npm:globby@4.0.0",
        "postcss": "npm:postcss@5.0.19",
        "postcss-js": "npm:postcss-js@0.1.2",
        "postcss-simple-vars": "npm:postcss-simple-vars@1.2.0"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-modules-local-by-default@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-modules-scope@1.0.0": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-modules-values@1.1.0": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-modules-values@1.1.1": {
      "map": {
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-nesting@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.4.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-ordered-values@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-selector-parser@1.3.3": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:postcss-simple-vars@1.2.0": {
      "map": {
        "postcss": "npm:postcss@5.0.19"
      }
    },
    "npm:postcss-svgo@2.1.2": {
      "map": {
        "is-svg": "npm:is-svg@1.1.1",
        "postcss": "npm:postcss@5.0.19",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "svgo": "npm:svgo@0.6.1"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss": "npm:postcss@5.0.19",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-zindex@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.0.19",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss@5.0.10": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.3",
        "supports-color": "npm:supports-color@3.1.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
      }
    },
    "npm:postcss@5.0.19": {
      "map": {
        "js-base64": "npm:js-base64@2.1.9",
        "source-map": "npm:source-map@0.5.3",
        "supports-color": "npm:supports-color@3.1.2"
      }
    },
    "npm:query-string@3.0.1": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:read-cache@1.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:readable-stream@2.0.5": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:reduce-css-calc@1.2.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:sort-keys@1.1.1": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:source-map@0.5.3": {
      "map": {}
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.5"
      }
    },
    "npm:stream-http@2.1.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:svgo@0.6.1": {
      "map": {
        "coa": "npm:coa@1.0.1",
        "colors": "npm:colors@1.1.2",
        "csso": "npm:csso@1.4.4",
        "js-yaml": "npm:js-yaml@3.4.6",
        "mkdirp": "npm:mkdirp@0.5.1",
        "sax": "npm:sax@1.1.6",
        "whet.extend": "npm:whet.extend@0.9.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  }
});
