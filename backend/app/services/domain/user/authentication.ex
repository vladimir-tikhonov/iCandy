defmodule Backend.Services.Domain.User.Authentication do
  import Ecto.Query, only: [from: 2]

  alias Backend.Models.User, as: UserModel
  alias Backend.Services.Support.Hashing, as: HashingService
  alias Backend.Services.Support.AuthToken, as: AuthTokenService
  alias Backend.Repo

  def authenticate_user(username_or_email, password) do
    with [user_id, password_hash] <- load_user(username_or_email),
      true <- validate_password(password, password_hash) do
      token = AuthTokenService.generate_auth_token(user_id, build_token_expiration_timestamp(), build_token_secret(password_hash))
      {:ok, token}
    else
      {:error, errors} -> {:error, errors}
    end
  end

  defp load_user(username_or_email) do
    query = from u in UserModel,
      where: u.username == ^username_or_email or u.email == ^username_or_email,
      select: [u.id, u.password_hash]

    case Repo.one(query) do
      [user_id, password_hash] -> [user_id, password_hash]
      _ -> {:error, %{usernameOrEmail: "not found"}}
    end
  end

  defp validate_password(password, password_hash) do
    case HashingService.verify_string(password, password_hash) do
      true -> true
      _ -> {:error, %{password: "is invalid"}}
    end
  end

  defp build_token_expiration_timestamp do
    Timex.today |> Timex.shift(days: fetch_config(:token_expiration_in_days)) |> Timex.to_unix
  end

  defp build_token_secret(password_hash) do
    fetch_config(:secret_key) <> password_hash
  end

  defp fetch_config(key) do
    Application.get_env(:backend, Backend.Services.Domain.User.Authentication)
      |> Keyword.fetch!(key)
  end
end
