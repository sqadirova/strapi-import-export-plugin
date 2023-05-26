module.exports = ({strapi}) => ({
  async exportRestaurants(ctx) {
    try {
      // console.log(strapi.plugin("import-export").service("importExport").exportRestaurants(ctx.query),"--controller")
      console.log("---ctx.query: ", ctx.query)
      return await strapi.plugin("import-export").service("importExportService").exportRestaurants(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async importRestaurants(ctx) {
    try {
      console.log("---ctx.request.body: ", ctx.request.body)
      ctx.body = await strapi.plugin("import-export").service("importExportService").importRestaurants(ctx.request.body);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});
