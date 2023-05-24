'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('import-export')
      .service('myService')
      .getWelcomeMessage();
  },
});
