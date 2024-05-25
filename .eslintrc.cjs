/* eslint-env node */

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript",
		"@vue/eslint-config-prettier",
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		"prettier/prettier": "error",
		indent: ["warn", "tab"],
	},
};
