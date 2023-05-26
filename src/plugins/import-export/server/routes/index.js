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
    method: "POST",
    path: "/import",
    handler: "importExportController.importRestaurants",
    config: {
      policies: [],
    },
  },
];
