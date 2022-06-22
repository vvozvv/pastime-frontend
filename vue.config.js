const Dotenv = require('dotenv-webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  },
  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/main.js',
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлечённые общий фрагмент и вендорный фрагмент.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}