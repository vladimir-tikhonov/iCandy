defmodule Backend.Router do
  use Phoenix.Router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1" do
    pipe_through :api

    resources("/users", Backend.UsersController, only: [:create])
  end
end
