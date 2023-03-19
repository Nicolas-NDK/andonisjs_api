import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Students from 'App/Models/Student'

export default class StudentsController {
  public async index({}: HttpContextContract) {
    const students = await Students.all()
    return students
  }

  public async create({}: HttpContextContract) {
    return 'create'
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'email', 'matricula', 'data_nascimento'])

    const students = await Students.create({
      name: body.name,
      email: body.email,
      matricula: body.matricula,
      data_nascimento: body.data_nascimento
    })
    
    console.log(students.$isPersisted)

    return students
  }

  public async show({ request }: HttpContextContract) {
    const studentId = request.param('id')
    const student = await Students.findOrFail(studentId)
    return student
  }

  public async edit({}: HttpContextContract) {
    return 'edit'
  }

  public async update({ request }: HttpContextContract) {
    const studentId = request.param('id')
    const body = request.only(['name', 'email', 'matricula', 'data_nascimento'])
    const student = await Students.findOrFail(studentId)
    await student.merge(body).save()

    return student
  }

  public async destroy({request}: HttpContextContract) {
    const studentId = request.param('id')
    const student = await Students.findOrFail(studentId)
    await student.delete()
    return 'Usuario deletado'
  }
}
