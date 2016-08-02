defmodule Backend.Services.Domain.User.Authentication do
  import Ecto.Query, only: [from: 2]

  alias Backend.Models.User, as: UserModel
  alias Backend.Services.Support.Hashing, as: HashingService
  alias Backend.Repo

  def authenticate_user(username_or_email, password) do
    query = from u in UserModel,
      where: u.username == ^username_or_email or u.email == ^username_or_email,
      select: [u.id, u.password_hash]

    with [user_id, password_hash] <- Repo.one(query),
      true <- HashingService.verify_string(password, password_hash) do
      [user_id, password_hash]
    else
       _ -> :error
    end
  end

  def build_token_expiration_timestamp do
    Timex.today |> Timex.shift(days: fetch_config(:token_expiration_in_days)) |> Timex.to_unix
  end

  def build_token_secret(password_hash) do
    fetch_config(:secret_key) <> password_hash
  end

  defp fetch_config(key) do
    Application.get_env(:backend, Backend.Services.Domain.User.Authentication)
      |> Keyword.fetch!(key)
  end
end
