'use strict';

/**
 * shirts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shirts.shirts');
