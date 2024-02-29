'use strict';

/**
 * wordpress-plugin router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wordpress-plugin.wordpress-plugin');
