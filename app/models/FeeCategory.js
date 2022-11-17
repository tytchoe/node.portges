"use strict";

module.exports = (sequelize, DataTypes) => {
    const FeeCategory = sequelize.define("FeeCategory", {
        Id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
        },
        FeeName:{
            type: DataTypes.STRING(255),
            allowNull : true,
        }
    },
    {
      timestamps: false,
    }
    );
      return FeeCategory;
}