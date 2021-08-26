
module.exports = (sequelize, DataTypes)=>{
    const Album = sequelize.define('Album',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        titulo:DataTypes.STRING,
        id_artista:DataTypes.INTEGER
      
    }, {
        tableName:'albuns', 
        timestamps:false
    })
    Album.associate = (models)=>{
        Album.belongsTo(models.Artista, {
            foreignKey:'id_artista',
            as:'artista'
        })
      }
    return Album
}
/*
module.exports = (sequelize, DataTypes) => sequelize.define('Album', {
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        titulo:DataTypes.STRING,
        id_artista:{type:DataTypes.INTEGER,  references: {
            model: 'Artista',
            key: 'id'
          }}
  },{tableName:'albuns', 
    timestamps:false});

*/

 
