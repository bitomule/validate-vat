Package.describe({
    summary: "validate-vat Npm wrapper",
    name: "bitomule:validate-vat",
	version: "0.3.1"
});

Npm.depends({
	'validate-vat': "0.3.1"
});

Package.on_use(function(api) {
    api.versionsFrom("METEOR@0.9.2");
    api.add_files('lib.js', 'server');
    api.export("validateVat");
});
