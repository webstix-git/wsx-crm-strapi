'use strict';

/**
 * wordpress-plugin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wordpress-plugin.wordpress-plugin');
