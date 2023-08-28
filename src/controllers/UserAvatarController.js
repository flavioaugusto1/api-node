const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    const avatarFilename = request.file.filename;
    const diskStorage = new DiskStorage();

    const user = await knex("users").where({ id: user_id }).first();

    if (!user) {
      throw new AppError(
        "Não pode ser feita a troca de foto sem estar autenticado",
        401
      );
    }

    if (user.avatar) {
      await diskStorage.deleFile(user.avatar);
    }

    const fileName = await diskStorage.saveFile(avatarFilename);
    user.avatar = fileName;

    await knex("users").update(user).where({ id: user_id });

    return response.json(user);
  }
}

module.exports = UserAvatarController;
