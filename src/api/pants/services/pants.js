'use strict';

/**
 * pants service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pants.pants');
