module.exports = ({strapi}) => ({
  async exportRestaurants(ctx) {
    try {
      // console.log(strapi.plugin("import-export").service("importExport").exportRestaurants(ctx.query),"--controller")
      return await strapi.plugin("import-export").service("importExport").exportRestaurants(ctx.query);
      //strapi.plugin("import-export").service("exportRestaurants",ctx.query)
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async importRestaurants(ctx) {
    try {
      ctx.body = await strapi
        .plugin("import-export")
        .service("importRestaurants",ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});
