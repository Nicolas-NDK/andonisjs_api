import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teachers from 'App/Models/Teacher'

export default class TeachersController {
  public async index({}: HttpContextContract) {
    const teachers = await Teachers.all()
    return teachers
  }

  public async create({}: HttpContextContract) {
    return 'create'
  }

  public async store({ request }: HttpContextContract) {
    const body = request.only(['name', 'email', 'matricula', 'data_nascimento'])

    const teachers = await Teachers.create({
      name: body.name,
      email: body.email,
      matricula: body.matricula,
      data_nascimento: body.data_nascimento
    })
    
    console.log(teachers.$isPersisted)

    return teachers
  }

    public async show({ request }: HttpContextContract) {
      const teacherId = request.param('id')
      const teacher = await Teachers.find(teacherId)
      return teacher
    }
  

  public async edit({}: HttpContextContract) {
    return 'edit'
  }

  public async update({ request }: HttpContextContract) {
    const teacherId = request.param('id')
    const body = request.only(['name', 'email', 'matricula', 'data_nascimento'])
    const teachers = await Teachers.findOrFail(teacherId)
    await teachers.merge(body).save()

    return teachers
  }

  public async destroy({request}: HttpContextContract) {
    const teacherId = request.param('id')
    const teacher = await Teachers.findOrFail(teacherId)
    await teacher.delete()
    return 'Usuario deletado'
  }
}