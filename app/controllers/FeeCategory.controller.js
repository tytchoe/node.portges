const db = require("../models");
const fee = db.FeeCategory;
const Op = db.Sequelize.Op;

exports.getAll = (req,res)=>{
  
    fee.findAll()
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Product."
          });
        });
    };
  