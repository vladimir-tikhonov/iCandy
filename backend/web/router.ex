defmodule Backend.Router do
  use Phoenix.Router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1" do
    pipe_through :api

    resources("/users", Backend.UsersController, only: [:create])
    resources("/sessions", Backend.SessionsController, only: [:create])
  end
end
