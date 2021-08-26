
  module.exports = (sequelize, DataTypes)=>{
    const Artista = sequelize.define('Artista',{
      id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        nome:DataTypes.STRING,
    }, {
        tableName:'artistas', 
        timestamps:false
    })
    Artista.associate = (models)=>{
        Artista.hasMany(models.Album, {
            foreignKey:'id_artista',
            as:'albuns'
        })
      }
    return Artista
}