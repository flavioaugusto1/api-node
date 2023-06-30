const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if (checkUserExists) {
      throw new AppError('O e-mail informado já está cadastrado')
    }

    const hashedPassword = await hash(password, 8)

    await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword])

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, oldPassword } = request.body
    const { id } = request.params

    const database = await sqliteConnection()

    const user = await database.get('SELECT * FROM users WHERE id = (?)', [id])

    if (!user) {
      throw new AppError("O usuário informado não existe.")
    }

    const userWithUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email])

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("O e-mail informado já está sendo utilizado.")
    }

    user.name = name
    user.email = email

    if (password && !oldPassword) {
      throw new AppError("Necessário informar a senha antiga.")
    }

    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password)

      if (!checkOldPassword) {
        throw new AppError("A senha atual está incorreta.")
      }

      user.password = await hash(password, 8)
    }

    await database.run(`UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ? `,
      [user.name, user.email, user.password, id]
    )

    return response.json()

  }
}

module.exports = UsersController