import { Sequelize } from "sequelize";
 
const db = new Sequelize('loginauth', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;