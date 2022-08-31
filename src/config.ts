require('dotenv').config();

export default class Config {
  public static localDbConfig = {
    host: process.env.LOCAL_DB_IP,
    port: Number(process.env.LOCAL_DB_PORT),
    database: process.env.LOCAL_DB_DBNAME,
    user: process.env.LOCAL_DB_USER,
    password: process.env.LOCAL_DB_PASSWORD,
  };
}
