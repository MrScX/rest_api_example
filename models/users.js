
module.exports = function(sequelize, DataTypes) {

	return sequelize.define('users', {
		u_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		first_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false
		},
	}, {
		tableName: 'users'
	});
};
