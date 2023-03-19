import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  public async up() {
    this.schema.alterTable("classrooms", (table) => {
      table
        .integer("teacher_id")
        .unsigned()
        .references("teachers.id")
        .onDelete("CASCADE");
    });
  }
}
