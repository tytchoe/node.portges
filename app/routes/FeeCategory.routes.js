module.exports = app => {
    const FeeCategory = require("../controllers/FeeCategory.controller");
  
    var router = require("express").Router();
  
    // Create a new product
    router.get("/", FeeCategory.getAll);
  
    app.use('/api/feev1', router);
  };