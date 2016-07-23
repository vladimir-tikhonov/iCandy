defmodule Backend.Services.Domain.User.Registration do
  alias Backend.Models.User, as: UserModel
  alias Backend.Services.Support.Hashing, as: HashingService
  alias Backend.Repo
  alias Backend.Services.Support.ErrorsFormatter

  def register_new_user(params) do
    params = %{
      username: params.username,
      email: params.email,
      password_hash: HashingService.hash_string(params.password)
    }

    changeset = UserModel.changeset(%UserModel{}, params)
    case Repo.insert(changeset) do
      {:ok, changes} -> {:ok, changes}
      {:error, changeset} -> {:error, ErrorsFormatter.format_changeset_errors(changeset.errors)}
    end
  end
end
