module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      blog_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
    }, {
      tableName: 'favorite',
      underscored: true,
      timestamps: false
    });
  
    return Favorite;
  };
  