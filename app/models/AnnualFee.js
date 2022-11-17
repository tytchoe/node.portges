"use strict";

const { ENUM } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const AnnualFee = sequelize.define("AnnualFee", {
        Id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        CarId:  {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        FeeCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Status: {
            type: DataTypes.ENUM("active","expired"),
            defaultValue: "active",
        },
        ExpireDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        CompanyId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
      timestamps: false,
    }
    );
      return AnnualFee;
}