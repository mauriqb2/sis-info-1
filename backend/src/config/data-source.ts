import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/user.entity";

export const dataSourceOptions:DataSourceOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "sistema_salud",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
};

export const AppDataSource = new DataSource(dataSourceOptions);