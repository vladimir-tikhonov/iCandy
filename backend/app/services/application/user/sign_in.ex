defmodule Backend.Services.Application.User.SignIn do
  use Timex

  alias Backend.Services.Domain.User.Authentication, as: AuthenticationService
  alias Backend.Services.Support.AuthToken, as: AuthTokenService

  def sign_in_user(username_or_email, password) do
    with [user_id, password_hash] <- AuthenticationService.authenticate_user(username_or_email, password) do
      AuthTokenService.generate_auth_token(
        user_id,
        AuthenticationService.build_token_expiration_timestamp(),
        AuthenticationService.build_token_secret(password_hash)
      )
    else
      _ -> :error
    end
  end
end
