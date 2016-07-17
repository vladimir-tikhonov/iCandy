defmodule Backend.UsersController do
  use Backend.Web, :controller

  def create(connection, params) do
    IO.inspect(params)
    json(connection, %{})
  end
end
