'use strict';

const { Ignitor } = require('@adonisjs/ignitor');

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .preLoad('preloads/bull') // Add This Line
  .fireHttpServer()
  .catch(console.error);
