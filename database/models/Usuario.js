
module.exports = (sequelize, DataTypes) => sequelize.define('Usuario', {
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        nome:DataTypes.STRING,
        email:DataTypes.STRING,
        hashed:DataTypes.STRING},
  {tableName:'usuarios', 
    timestamps:false});



 
