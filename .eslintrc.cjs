module.exports = {
  // 指定脚本的运行环境
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime'
  ],
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 脚本在执行期间访问的额外的全局变量
  // 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告
  // 所以需要定义这些额外的全局变量
  globals: {
    // OnlySVG: true,
    // monitor: true,
    // CanvasRender: true,
    // Vue: true,
    // VueRouter: true
  },
  overrides: [],
  // 指定解析器
  parser: '@typescript-eslint/parser',
  // 指定解析器选项
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  // 这里在最后加prettier，让它覆盖前面的eslint，将所有的代码规范问题统一交给prettier来处理
  plugins: ['react', '@typescript-eslint', 'prettier'],
  // 启用的规则及其各自的错误级别
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false
      }
    ]
  },
  // 忽略所有的样式文件
  ignorePatterns: ['**/*.css', 'src/assets/*'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
}
