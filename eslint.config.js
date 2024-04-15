// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ["src/**/*.ts"],
  ignores: ["dist/**/*"],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ],
  rules: {
    /* *****************
      * basic
      *******************/
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "camelcase": ["error", {properties: "always"}],
    /* *****************
      * error prevention
      *******************/
    "wrap-iife": ["error", "inside"],
    "consistent-return": "error",
    "no-template-curly-in-string": "error",
    // TODO: gulp-eslint is running outdated eslint
    // "no-promise-executor-return": "error",
    // "default-case-last": "error",
    "eqeqeq": "error",
    "dot-notation": "error",
    "dot-location": ["error", "property"],
    "curly": ["error", "all"],
    // "strict":                        ["error", "global"],
    // "complexity":                    ["error", {max: 10}],
    /* *****************
      * cosmetic
      *******************/
    "space-before-function-paren": ["error", "never"],
    "func-call-spacing": ["error", "never"],
    "function-call-argument-newline": ["error", "consistent"],
    "one-var": ["error", "never"],
    "switch-colon-spacing": ["error", {after: true, before: false}],
    "padded-blocks": ["error", "never"],
    "operator-linebreak": ["error", "after"],
    "quote-props": ["error", "consistent-as-needed"],
    "semi-spacing": ["error", {before: false}],
    "semi-style": ["error", "last"],
    "eol-last": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", {int32Hint: false}],
    "keyword-spacing": ["error", {before: true, after: true}],
    "space-unary-ops": ["error", {words: true, nonwords: false}],
    "spaced-comment": ["error", "always"],
    "key-spacing": ["error", {afterColon: true, beforeColon: false, mode: "strict"}],
    "object-curly-spacing": ["error", "never"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-style": ["error", "last"],
    "comma-spacing": ["error", {before: false, after: true}],
    "brace-style": ["error", "1tbs"],
    "array-element-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-bracket-newline": ["error", "consistent"],
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-else-return": "error",
    "no-multi-spaces": "error",
    "new-parens": ["error", "always"],
    "no-whitespace-before-property": "error",
    "no-nested-ternary": "error",
    "nonblock-statement-body-position": ["error", "below", {overrides: "if"}],
    "no-mixed-operators": ["error", {allowSamePrecedence: true}],
    "default-case": "error",
    "default-param-last": "error",
    "no-multiple-empty-lines": ["error", {max: 1, maxBOF: 0, maxEOF: 1}],
    "padding-line-between-statements": [
        "error",
        {blankLine: "always", prev: "*", next: "class"},
        {blankLine: "always", prev: "class", next: "*"},
        {blankLine: "always", prev: "if", next: "*"},
    ],
    // "no-underscore-dangle":          "error",
    // "no-magic-numbers":              "error", // some magic numbers are okay (such as the '4' for indent in this file)
    // "no-new":                        "error", // bad for some Mocha tests that expect to throw
    // "one-var-declaration-per-line":  ["error", "never"],
    /* *****************
      * style
      *******************/
    "no-warning-comments": ["warn", {terms: ["TODO", "FIXME", "XXX", "NOTE"]}],
    "sort-vars": "error",
    "yoda": ["error", "never"],
    // "sort-keys": ["warn", "asc", {"natural": true}],
    /* *****************
      * ES6
      *******************/
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],
    "sort-imports": ["error"],
    "rest-spread-spacing": ["error", "always"],
    "arrow-parens": ["error", "always"],
    // "require-await": "error", // annoying for API calls that don't contain await
    "prefer-rest-params": "error",
    "prefer-destructuring": ["error", {"object": true, "array": false}],
    "prefer-spread": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-useless-computed-key": "error",
  }
});