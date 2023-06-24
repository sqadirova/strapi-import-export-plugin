const fs = require('fs');

module.exports = ({strapi}) => ({
  async exportRestaurants(ctx) {
    try {
      console.log("---ctx.query: ", ctx.query)
      return await strapi.plugin("import-export").service("importExportService").exportRestaurants(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async exportAllData(ctx) {
    try {
      // console.log(strapi.plugin("import-export").service("importExport").exportRestaurants(ctx.query),"--controller")
      console.log("---ctx.query: ", ctx.query)
      return await strapi.plugin("import-export").service("importExportService").exportAllData(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async uploadAndImport(ctx) {
    console.log("--ctx.request: ",ctx.request);

    const file = ctx.request.files.file;
    const filePath = file.path;
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    await strapi.plugin("import-export").service("importExportService").uploadAndImport(data.data)

    // Delete the temporary file
    fs.unlinkSync(filePath);

    ctx.send({message: 'File uploaded, data processed, and entries imported successfully.'});
  },

});
