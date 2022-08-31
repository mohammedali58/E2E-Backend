'use strict';

import { Sequelize } from 'sequelize';
import Config from '../../config';


export default abstract class Db {
  public static sequelize = new Sequelize(
    Config.localDbConfig.database,
    Config.localDbConfig.user,
    Config.localDbConfig.password,
    {
      host: Config.localDbConfig.host,
      port: Config.localDbConfig.port,
      dialect: 'postgres',
      logging: false,
    },
  );
}
