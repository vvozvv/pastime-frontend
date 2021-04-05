module.exports = {
  "extends": [
    'plugin:vue/vue3-recommended',
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "env": {
    browser: true,
  },
  "plugins": ["vue"],
  "rules": {
    "vue/max-attributes-per-line": "off",
    "vue/return-in-computed-property": ["error", {
      "treatUndefinedAsUnspecified": true
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/comment-directive': 'off',
  },
};