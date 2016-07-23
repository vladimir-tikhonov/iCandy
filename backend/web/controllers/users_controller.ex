defmodule Backend.UsersController do
  use Backend.Web, :controller

  alias Backend.Services.Domain.User.Registration, as: UserRegistrationService

  def create(connection, params) do
    registration_params = %{
      username: params["username"],
      email: params["email"],
      password: params["password"]
    }

    case UserRegistrationService.register_new_user(registration_params) do
      {:ok, _} -> json(connection, %{})
      {:error, errors} -> connection |> put_status(400) |> json(%{errors: errors})
    end
  end
end
