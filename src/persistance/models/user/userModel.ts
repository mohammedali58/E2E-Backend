import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from 'src/domain/user/user';

export class UserModel extends Model<User> {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  mobile_number: string;

// if we need to make a one to many  relationship
  // public static associate() {
  //   UserModel.hasMany(ArticleModel, {
  //     foreignKey: { name: 'ArticlId' },
  //     as: 'Article',
  //   });
  // }
}

export class UserInitializer {
  public static init(sequelize: Sequelize) {
    UserModel.init(
      {
        id: {  type: DataTypes.UUID, primaryKey: true },
        first_name: { type: DataTypes.STRING },
        last_name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING },
        mobile_number: {type :DataTypes.STRING}
       
      },
      {
        sequelize,
        modelName: 'user',
        tableName: 'user',
        timestamps: false,
      },
    );
  }
}
