defmodule Backend.SessionsController do
  use Backend.Web, :controller

  alias Backend.Services.Application.User.SignIn, as: UserSignInService

  def create(connection, params) do
    token = UserSignInService.sign_in_user(params["username_or_email"], params["password"])

    json(connection, %{token: token})
  end
end
