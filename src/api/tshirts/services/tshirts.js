'use strict';

/**
 * tshirts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tshirts.tshirts');
