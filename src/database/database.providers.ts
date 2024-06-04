import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
	{
		provide: 'SEQUELIZE',
		useFactory: async () => {
			const sequelize = new Sequelize({
				dialect: 'postgres', // 或 'mysql'
				host: process.env.DB_HOST,
				port: parseInt(process.env.DB_PORT, 10),
				username: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_NAME,
			});
			sequelize.addModels([Cat]);
			await sequelize.sync();
			return sequelize;
		},
	},
];
