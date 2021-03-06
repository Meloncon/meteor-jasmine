/* jshint camelcase: false */
/* global
   Package: false
 */

Package.describe({
  summary: 'Easily and securely use Jasmine within client side Meteor'
});

Npm.depends({
  'fs.extra': '1.2.1',
  'jasmine-core': '2.0.0',
  'meteor-stubs': '0.0.2',
  'component-mocker': '0.2.0'
});

Package.on_use(function (api) {
  api.use(['velocity'], 'server');
  api.use(['templating'], 'client');

  api.add_files(['server/main.js'], 'server');

  if (process.env.IS_MIRROR) {
    api.add_files([
      '.npm/package/node_modules/component-mocker/index.js',
      '.npm/package/node_modules/meteor-stubs/index.js',
      '.npm/package/node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      '.npm/package/node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
      'client/reporter.js',
      'client/boot.js',
      'client/mocker.js'
    ], 'client');

    api.add_files([
      'server/server.js'
    ], 'server');
  } else {
    api.add_files([
      'server/fileCopier.js'
    ], 'server');
  }
});
