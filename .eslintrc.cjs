module.exports = {
	root: true,
	plugins: ["prettier", "unicorn", "import"],
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:unicorn/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	ignorePatterns: [".next"],
	rules: {
		semi: ["error", "always"],
		"unicorn/filename-case": ["error", { case: "camelCase" }],
		"no-console": ["error"],
		"unicorn/no-fn-reference-in-iterator": "off",
		"unicorn/no-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/switch-case-braces": "off",
		"unicorn/prefer-at": "off",
		"no-restricted-syntax": [
			"error",
			{
				selector: "ExportDefaultDeclaration",
				message: "Prefer named exports"
			}
		],
		"unicorn/no-array-reduce": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prefer-object-from-entries": ["off"],
		"unicorn/no-useless-undefined": "off",
		"no-else-return": ["error", { allowElseIf: false }]
	},
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true
				},

				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true
			},
			plugins: ["@typescript-eslint"],
			extends: ["plugin:import/typescript", "plugin:@typescript-eslint/recommended"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["error"]
			}
		},
		{
			files: ["src/app/**/*.ts?(x)", "src/app/**/*.js?(x)"],
			rules: {
				"no-restricted-syntax": ["off"]
			}
		},
		{
			files: ["**/*.d.ts"],
			rules: {
				"@typescript-eslint/triple-slash-reference": ["off"],
				"@typescript-eslint/no-namespace": ["off"],
				"unicorn/prevent-abbreviations": ["off"],
				"no-restricted-syntax": ["off"]
			}
		},
		{
			files: ["**/*.cjs"],
			env: {
				es2023: true,
				node: true
			}
		},
		{
			files: ["postcss.config.js", "tailwind.config.ts", "next.config.mjs", ".eslintrc.cjs", ".lintstagedrc.js"],
			rules: {
				"unicorn/filename-case": ["off"],
				"no-restricted-syntax": ["off"],
				"unicorn/prefer-module": ["off"]
			},
			env: {
				commonjs: true,
				node: true
			}
		}
	],
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			typescript: {} // this loads <rootdir>/tsconfig.json to eslint
		}
	}
};
