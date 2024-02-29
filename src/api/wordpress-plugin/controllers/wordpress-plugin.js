'use strict';

/**
 * wordpress-plugin controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wordpress-plugin.wordpress-plugin');
