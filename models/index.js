/**!
 * cnpmjs.org - models/index.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var path = require('path');
var sequelize = require('../common/sequelize');

function load(name) {
  return sequelize.import(path.join(__dirname, name));
}

module.exports = {
  sequelize: sequelize,
  Module: load('module'),
  ModuleLog: load('module_log'),
  ModuleStar: load('module_star'),
  ModuleKeyword: load('module_keyword'),
  ModuleDependency: load('module_deps'),
  NpmModuleMaintainer: load('npm_module_maintainer'),

  Tag: load('tag'),
  User: load('user'),
  Total: load('total'),
  Download: load('download_total'),
  DistFile: load('dist_file'),
  DistDir: load('dist_dir'),

  query: function* (sql, args) {
    return yield this.sequelize.query(sql, null, {raw: true}, args);
  },
  queryOne: function* (sql, args) {
    var rows = yield* this.query(sql, args);
    return rows && rows[0];
  }
};
