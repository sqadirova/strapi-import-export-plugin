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

  // async importRestaurants(ctx) {
  //   try {
  //     console.log("---ctx.request.body: ", ctx.request.body)
  //     ctx.body = await strapi.plugin("import-export").service("importExportService").importRestaurants(ctx.request.body);
  //   } catch (err) {
  //     ctx.throw(500, err);
  //   }
  // },

  async uploadAndImport(ctx) {
    // console.log("--ctx.request: ", ctx.request);
    // console.log("--ctx.request: ", ctx.request);

    console.log("--ctx: ",ctx.request);

    // const ctxx = strapi.requestContext.get();
    // console.log('--User info in service: ', ctxx.state.user);
    // console.log("--1-ctxx.request.files: ", ctxx.request.files);
    // console.log("--2-ctx.request.file: ", ctx.request.file);
    // const {file} = ctx.request.files;
    // console.log("{file}: ",file)


    const file = ctx.request.files.file;
    const filePath = file.path;
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    // const data = jsonData;

    // Process the data as needed
    // console.log("upload and import data: ", data);

    // Create entries using Strapi services and models
    // const {model} = strapi.query('restaurants');
    // console.log("model: ", model)
    //    const {model} = strapi.db.query('api::restaurants.restaurants');
    // for (const entryData of data) {
    //   await model.create(entryData);
    // }

    await strapi.plugin("import-export").service("importExportService").uploadAndImport(data.data)

    // Delete the temporary file
    fs.unlinkSync(filePath);

    ctx.send({message: 'File uploaded, data processed, and entries imported successfully.'});
  },

  // async uploadFile(ctx) {
  //   const {file} = ctx.request.files;
  //   const filePath = file.path;
  //   const jsonData = fs.readFileSync(filePath, 'utf8');
  //   const data = JSON.parse(jsonData);
  //
  //   // Process the data as needed
  //   console.log(data);
  //
  //   // You can use Strapi services and models to save the data to the database
  //   //todo service.create
  //
  //   // Delete the temporary file
  //   fs.unlinkSync(filePath);
  //
  //   ctx.send({message: 'File uploaded and data processed successfully.'});
  // },


});
