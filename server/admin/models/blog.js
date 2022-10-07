const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Blog.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 36],
        },
      },
      slug: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 36],
        },
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Blog',
    }
  );
  return Blog;
};
