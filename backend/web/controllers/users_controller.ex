defmodule Backend.UsersController do
  use Backend.Web, :controller

  alias Backend.Services.Domain.User.Registration, as: UserRegistrationService

  def create(connection, params) do
    registration_params = %{
      username: params["username"],
      email: params["email"],
      password: params["password"]
    }
    UserRegistrationService.register_new_user(registration_params)
    json(connection, %{})
  end
end
