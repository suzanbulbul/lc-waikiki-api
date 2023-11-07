'use strict';

/**
 * pants-json service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pants-json.pants-json');
