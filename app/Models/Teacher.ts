import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Classroom from "./Classroom";

export default class Teachers extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public matricula: number;

  @column()
  public data_nascimento: Date;

  // @column({ columnName: 'data_nascimento', serializeAs: null })
  // public birthDate: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Classroom)
  public classroom: HasMany<typeof Classroom>;
}
