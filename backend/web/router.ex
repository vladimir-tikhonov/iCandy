defmodule Backend.Router do
  use Phoenix.Router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Backend do
    pipe_through :api
  end
end
