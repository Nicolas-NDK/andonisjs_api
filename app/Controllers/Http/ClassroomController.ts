import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Classroom from "App/Models/Classroom";
import Students from "App/Models/Student";

export default class ClassroomController {
  public async index({}: HttpContextContract) {
    // const classroom = await Classroom.query().with("student").fetch() ;
    const classroom = await Classroom.all();

    return classroom;
  }

  public async create({}: HttpContextContract) {
    return "create";
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(["studentCapacity", "teacherId", "studentsIds"]);

    if (body.studentsIds.length > body.studentCapacity) {
      throw new Error(
        `O numero de estudantes tem que ser menor que a capacidade da sala`
      );
    }

    const classRoom = await Classroom.create({
      student_capacity: body.studentCapacity,
      teacherId: body.teacherId,
    });
    const students = await Promise.all(
      body.studentsIds.map(async (id) => {
        const student = await Students.findOrFail(id);
        if (!student) {
          throw new Error(`Student with id ${id} not found`);
        }
        return student;
      })
    );
    await classRoom.related("student").createMany(students);

    console.log(classRoom.$isPersisted);

    return classRoom;
  }

  public async show({ request }: HttpContextContract) {
    const classRoomId = request.param("id");
    const classRoom = await Classroom.findOrFail(classRoomId);
    return classRoom;
  }

  public async edit({}: HttpContextContract) {
    return "edit";
  }

  public async update({ request }: HttpContextContract) {
    const classRoomId = request.param("id");
    const body = request.only(["studentCapacity", "studentsIds"]);
    const classRooms = await Classroom.findOrFail(classRoomId);

    if (body.studentsIds.length > body.studentCapacity) {
      throw new Error(
        `O numero de estudantes tem que ser menor que a capacidade da sala`
      );
    }

    await classRooms.merge({ student_capacity: body.studentCapacity }).save();

    const students = await Promise.all(
      body.studentsIds.map(async (id) => {
        const student = await Students.findOrFail(id);
        if (!student) {
          throw new Error(`Student with id ${id} not found`);
        }
        return student;
      })
    );
    await classRooms.related("student").detach();
    await classRooms.related("student").createMany(students);

    return classRooms;
  }

  public async destroy({ request }: HttpContextContract) {
    const classRoomId = request.param("id");
    const classRoom = await Classroom.findOrFail(classRoomId);
    await classRoom.delete();
    return "Sala deletada";
  }
}
