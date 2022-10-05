const express = require("express");
const router = express.Router();
const uploadcontroller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/upload", uploadcontroller.upload);
  router.get("/files", uploadcontroller.getListFiles);
  router.get("/files/:name", uploadcontroller.download);
  router.delete("/files/:name", uploadcontroller.remove);

  app.use(router);
};

module.exports = routes;
