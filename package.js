/* jshint camelcase: false */
/* global
   Package: false
 */

Package.describe({
  summary: 'Easily and securely use Jasmine within client side Meteor'
});

Npm.depends({
  'jasmine-core': '2.0.0',
  'meteor-stubs': '0.0.2',
  'lodash': '2.4.1',
  'glob': '3.2.9',
  'rimraf': '2.2.8',
  'coffee-script': '1.7.1'
});

Package.on_use(function (api) {
  api.use(['velocity', 'package-stubber'], 'server');
  api.use(['templating'], 'client');

  api.add_files(['server/main.js'], 'server');

  if (process.env.IS_MIRROR) {
    api.add_files([
      '.npm/package/node_modules/meteor-stubs/index.js',
      '.npm/package/node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      '.npm/package/node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
      'common/reporter.js',
      'client/boot.js'
    ], 'client');

    api.add_files([
      'server/server.js'
    ], 'server');
  } else {
    api.add_files([
      'server/server.js',
      'common/reporter.js',
      'server/runFileInContext.js',
      'server/lib/coffee-require.js',
      'server/lib/file-loader.js',
      'server/lib/html-scanner.js',
      'server/lib/load-order-sort.js',
      'server/lib/stub-loader.js',
      'server/boot.js',
      'server/fileCopier.js'
    ], 'server');
  }
});
