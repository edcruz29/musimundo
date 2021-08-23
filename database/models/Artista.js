
module.exports = (sequelize, DataTypes) => sequelize.define('Artista', {
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        nome:DataTypes.STRING,
  },
  {tableName:'artistas', 
    timestamps:false,
  });

