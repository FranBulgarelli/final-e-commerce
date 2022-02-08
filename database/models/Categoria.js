module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       nombre: {
           type: DataTypes.STRING,
           allowNull: false
       },
    };

    let config = {
        timestamps: false,
        tableName: "categorias"
    };

    const Categoria = sequelize.define("Categoria", cols, config);

    Categoria.associate = (models) => {
        Categoria.hasMany(models.Producto, {
            as: 'categoria',
            foreignKey: 'categoria_id'
        })

    }

    return Categoria;

}
