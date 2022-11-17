const db = require("../models");
const af = db.AnnualFee;
const Op = db.Sequelize.Op;

exports.create = async (req,res)=> {
    const check = await af.findOne({
        where: {
            CarId : req.body.CarId,
            FeeCategoryId : req.body.FeeCategoryId,
            Status: "active"
        }
    })

    if(check){
        const update = await af.update({
            Status: "expired"
        },{
            where: {
                Id: check.Id
            }
        })
    }

    const AnnualFee = {
        CarId: req.body.CarId,
        FeeCategoryId: req.body.FeeCategoryId,
        CompanyId: req.body.CompanyId,
        Price: req.body.Price,
        ExpireDate: req.body.ExpireDate,
        Status: req.body.Status
    }

    af.create(AnnualFee)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Product."
        });
      });
};

exports.get = async (req,res)=>{
    let query = {};
        query = Object.assign(query, {
          Status: "active",
          ExpireDate:{
            [Op.between]: [Date.now() , Date.now()+604800000]
          }
        })
        
        const { count, rows } = await af.findAndCountAll({
          where: query,
          offset: 0,
          limit: 5,
        });
        if(count) {
            const totalPages = Math.ceil(count / 5);
                res.send({
                    message: "get all",count,totalPages, rows
                  })
        }else{
            res.status(404).send({
                message:"Can not find"
            })
        } 
}