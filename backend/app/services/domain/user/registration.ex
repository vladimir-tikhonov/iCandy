defmodule Backend.Services.Domain.User.Registration do
  alias Backend.Models.User, as: UserModel
  alias Backend.Services.Support.Hashing, as: HashingService
  alias Backend.Repo
  alias Backend.Services.Support.ErrorsFormatter

  def register_new_user(%{username: username, email: email, password: password}) do
    user_details = %{
      username: username,
      email: email,
      password_hash: HashingService.hash_string(password)
    }

    changeset = UserModel.changeset(%UserModel{}, user_details)
    case Repo.insert(changeset) do
      {:ok, changes} -> {:ok, changes}
      {:error, changeset} -> {:error, ErrorsFormatter.format_changeset_errors(changeset.errors)}
    end
  end
end
