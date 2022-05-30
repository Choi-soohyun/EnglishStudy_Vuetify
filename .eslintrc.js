module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	plugins: ['vuetify', 'prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		// process.env.NODE_ENV === "production" 개발 모드일 땐 warn
		// "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		// "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		'prettier/prettier': [
			'warn',
			{
				// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
				// https://prettier.io/docs/en/options.html
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				printWidth: 200,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		'no-unused-vars': ['warn', { varslgnorePattern: '^map' }],
		'vuetify/no-deprecated-classes':'error',
		'vuetify/no-legacy-grid':'error'
		// quotes: ["error", "single"]
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
	globals: {
		_: false,
	},
};
