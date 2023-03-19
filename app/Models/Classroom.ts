import { DateTime } from "luxon";
import {
  BaseModel,
  belongsTo,
  BelongsTo,
  column,
  computed,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Students from "./Student";
import Teachers from "./Teacher";

export default class Classroom extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public student_capacity: number;

  @column()
  public teacherId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Teachers)
  public teacher: BelongsTo<typeof Teachers>;

  @manyToMany(() => Students)
  public student: ManyToMany<typeof Students>;

  // Tentativa de fazer um computed para isFull pegando a quatidade de estudades e comparando com a capacidade e retornando um boolean
  // @computed()
  // public get isFull(): any{
  //   const studentList = this.$getRelated('students');
  //   const result = false;
  //   return studentList;
  // }
}
