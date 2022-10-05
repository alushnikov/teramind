const express = require("express");
const router = express.Router();
const uploadcontroller = require("../controller/file.controller");
const { verifySignUp } = require("../middleware");
const controller = require("../controller/auth.controller");

let routes = (app) => {
  router.post("/upload", uploadcontroller.upload);
  router.get("/files", uploadcontroller.getListFiles);
  router.get("/files/:name", uploadcontroller.download);
  router.delete("/files/:name", uploadcontroller.remove);

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.use(router);
};

module.exports = routes;
