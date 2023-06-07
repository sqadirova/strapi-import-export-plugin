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

  {
    method: "POST",
    path: "/import",
    handler: "importExportController.importRestaurants",
    config: {
      policies: [],
    },
  },

  {
    method: 'POST',
    path: '/import/upload',
    handler: 'importExportController.uploadAndImport',
    config: {
      policies: [],
      multer: {
        enabled: true,
      },
    },
  },

];
