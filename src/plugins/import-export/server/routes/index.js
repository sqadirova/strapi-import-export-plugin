const {authPolicy} = require("../policies");
const {jwtMiddleware} = require("../middlewares");


module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/export",
    handler: "importExportController.exportRestaurants",
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/export/all",
    handler: "importExportController.exportAllData",
    config: {
      policies: [],
    },
  },

  // {
  //   method: "POST",
  //   path: "/import",
  //   handler: "importExportController.importRestaurants",
  //   config: {
  //     policies: [],
  //   },
  // },

  {
    method: 'POST',
    path: '/import/upload',
    handler: 'importExportController.uploadAndImport',
    config: {
      create: {
        auth: false
      },
      policies: [],
    },
  },

];
