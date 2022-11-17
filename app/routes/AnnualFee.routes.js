module.exports = app => {
    const AnnualFee = require("../controllers/AnnualFee.controller");
  
    var router = require("express").Router();
  
    // Create a new product
    router.post("/", AnnualFee.create);

    router.get("/get",AnnualFee.get);
  
    app.use('/api/fee', router);
  };