'use strict';

/**
 * jumpers service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jumpers.jumpers');
