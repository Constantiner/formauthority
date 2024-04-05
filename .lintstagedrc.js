const path = require("path");

const bldEslintCommand = filenames =>
	`npx next lint --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
	"*.{js,jsx,ts,tsx}": ["npx prettier --write", bldEslintCommand],
	"*.{json,htm,html,yml,eslintrc,huskyrc,lintstagedrc,prettierrc,stylelintrc}": ["npx prettier --write"]
};
