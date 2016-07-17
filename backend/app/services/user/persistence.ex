defmodule Backend.Services.User.Persistence do
  alias Backend.Models.User, as: UserModel
  alias Backend.Services.Hashing, as: HashingService
  alias Backend.Repo

  def register_new_user(params) do
    params = %{
      username: params.username,
      email: params.email,
      password_hash: HashingService.hash_string(params.password)
    }
    UserModel.changeset(%UserModel{}, params) |> Repo.insert
  end
end
