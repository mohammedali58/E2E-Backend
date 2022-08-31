import Db from '../DBConnection/localDB';
import { UserInitializer } from '../models/user/userModel';

export abstract class ModelsInit {
  public static init() {
    UserInitializer.init(Db.sequelize);
  }
}
