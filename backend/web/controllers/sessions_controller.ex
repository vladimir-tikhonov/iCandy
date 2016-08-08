defmodule Backend.SessionsController do
  use Backend.Web, :controller

  alias Backend.Services.Domain.User.Authentication, as: AuthenticationService

  def create(connection, params) do
    case AuthenticationService.authenticate_user(params["username_or_email"], params["password"]) do
      {:ok, auth_token} -> json(connection, %{token: auth_token})
      {:error, errors} -> connection |> put_status(403) |> json(%{errors: errors})
    end
  end
end
