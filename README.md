# API em Node.js utilizando o Adonis.js

 ## `Tecnologias utilizadas`
Esta API foi desenvolvida utilizando as seguintes tecnologias:

Node.js.\
Adonis.js.\
SQLite

### `Requisitos Funcionais da API`

A API permite que o aluno e o professor se cadastre com: Nome, e-mail, matrícula,
data de nascimento, alem de editar, excluir e consultar seu cadastro na aplicação.

O professor irá poder cadastrar uma nova sala de aula alem editar, excluir, consultar seus dados, alocar alunos, remover alunos e consultar alunos.

Lembrando que as salas não pode possuir o mesmo aluno, não pode exeder sua capacidade maxima e nem colocar alunos em salas que nçao foram criadas por ele.

O aluno poderá consultar todas as salas que está cadastrado.


### `Iniciando um projeto Adonis`

Este é um guia para iniciar um novo projeto Adonis. O Adonis é um framework MVC (Model-View-Controller) para Node.js, que permite criar aplicações robustas e escaláveis de forma mais simples e organizada.


### `Requisitos`

Antes de iniciar um projeto Adonis, você precisa ter instalado em sua máquina o Node.js e o npm (Node Package Manager).

Você pode baixar o Node.js e o npm em https://nodejs.org/en/download/.


### `Iniciando o projeto`

Abra a pasta do codigo e na barra de enderços digite `cmd`, isto abrirá um cmd direto na pasta do projeto.

Agora digite o seguinte comando.

`npm install`

Isto irá instalar a pasta node modules permitindo você rodar o codigo.


### `Validando rotas com Insominia`

Agora para este paço é preciso que tenha o Insominia instalado em sua maquina,

## `Comandos para a tabela Students`

O metodo PATCH será utilizado para editar o cadastro do aluno seguindo a seguinte rota `http://127.0.0.1:3333/students/ID DO STUDENTS CADASTRADO`

UTILIZE

  name.\
  email.\
  matricula.\
  data_nascimento
  
 Para poder esta editando o cadastro do aluno.
 

O metodo DEL será utilizado para Deletar o cadastro do aluno seguindo a seguinte rota `http://127.0.0.1:3333/students/ID DO STUDENTS CADASTRADO`

O metodo GET será utilizado para listar os alunos cadastastrados seguindo a seguinte rota `http://127.0.0.1:3333/students`

O metodo GET será utilizado para consultar o cadastro do Aluno seguindo a seguinte rota `http://127.0.0.1:3333/students/ID DO STUDENTS CADASTRADO`

O metodo POST será utilizado para Adicionar um aluno seguindo a seguinte rota `http://127.0.0.1:3333/students/`

UTILIZE 

  name.\
  email.\
  matricula.\
  data_nascimento
  
 Para poder esta criando o cadastro do aluno.
 
 
 ## `Comandos para a tabela Teachers`

O metodo PATCH será utilizado para editar o cadastro do professor seguindo a seguinte rota `http://127.0.0.1:3333/teachers/ID DO TEACHERS CADASTRADO`

UTILIZE 

  name.\
  email.\
  matricula.\
  data_nascimento
  
 Para poder esta editando o cadastro do professor.


O metodo DEL será utilizado para Deletar o cadastro do professor seguindo a seguinte rota `http://127.0.0.1:3333/teachers/ID DO TEACHERS CADASTRADO`

O metodo GET será utilizado para listar os professores cadastastrados seguindo a seguinte rota `http://127.0.0.1:3333/teachers`

O metodo GET será utilizado para consultar o cadastro do professor seguindo a seguinte rota `http://127.0.0.1:3333/teachers/ID DO TEACHERS CADASTRADO`

O metodo POST será utilizado para Adicionar um professor seguindo a seguinte rota `http://127.0.0.1:3333/teachers/`

UTILIZE 

  name.\
  email.\
  matricula.\
  data_nascimento
  
 Para poder esta criando o cadastro do professor.
 
 
  ## `Comandos para a tabela Class Room`
  
  O metodo PATCH será utilizado para editar o cadastro da sala de aula seguindo a seguinte rota `http://127.0.0.1:3333/classroom/ID DA SALA DE AULA CADASTRADA`

UTILIZE 

 {.\
	"studentCapacity":10, //CAPACIDADE DE ALUNOS POR SALA.\
	"studentsIds": [3] // ID DOS ALUNOS JA CADASTRADOS
}
  
 Para poder esta editando o cadastro da sala de aula.
 

O metodo DEL será utilizado para Deletar o cadastro da sala de aula seguindo a seguinte rota `http://127.0.0.1:3333/classroom/ID DA SALA DE AULA CADASTRADA`

O metodo GET será utilizado para listar a sala de aula cadastastradas seguindo a seguinte rota `http://127.0.0.1:3333/classroom`

O metodo GET será utilizado para consultar o cadastro da sala de aula seguindo a seguinte rota `http://127.0.0.1:3333/classroom/ID DA SALA DE AULA CADASTRADA`

O metodo POST será utilizado para Adicionar a sala de aular seguindo a seguinte rota `http://127.0.0.1:3333/classroom/`

UTILIZE 

{.\
	"studentCapacity": 10, //CAPACIDADE DE ALUNOS POR SALA.\
	"teacherId": 6, //ID DO PROFESSOR QUE ESTÁ CRIANDO A SALA DE AULA.\
	"studentsIds": [4,2,3] //ID DOS ALUNOS JA CADASTRADOS
}

Para poder esta criando o cadastro da sala de aula.


  ## `FIM`
  
  A api esta com alguns erros que pretendo atualizar no futuro como por exemplo.
  
  As validaçoes pois não consegui faze-las funcionar corretamente.
  Os alunos adicionados aparecer na sala de aula, eles são cadastrados porem não aparecem.
  Se você editar um Teacher ou um Students não consegue mais exclui-los.
  Se o professor criar uma sala de aula ele não pode ser excluido.
  
  Sou iniciante em Backend epero que gostem :)
  




