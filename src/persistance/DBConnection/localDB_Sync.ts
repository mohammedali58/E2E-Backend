import ModelsAssociate from '../ModelAssociate/modelsAssociate';
import { ModelsInit } from '../ModelInit/modelsInit';
import Db from './localDB';

export async function DBConnection(isNewRun: boolean) {
  ModelsInit.init();
  ModelsAssociate.apply();

  await Db.sequelize
    .sync() //'alter' was 'force' before
    .then(() => console.log('connected to database and tables created'))
    .catch((error) => console.error(error));
}
