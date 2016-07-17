defmodule Backend.UsersController do
  use Backend.Web, :controller

  alias Backend.Services.User.Persistence, as: UserPersistenceService

  def create(connection, params) do
    registration_params = %{
      username: params["username"],
      email: params["email"],
      password: params["password"]
    }
    UserPersistenceService.register_new_user(registration_params)
    json(connection, %{})
  end
end
