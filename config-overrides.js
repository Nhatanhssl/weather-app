const {
	override,
	disableEsLint,
	overrideDevServer,
	watchAll,
	useBabelRc,
} = require("customize-cra");

module.exports = {
	webpack: override(
		// usual webpack plugin
		useBabelRc(),
		disableEsLint()
	),
	devServer: overrideDevServer(
		// dev server plugin
		watchAll()
	),
};
