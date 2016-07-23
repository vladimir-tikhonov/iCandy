defmodule Backend.Models.User do
  use Backend.App, :model

  @managed_fields [:username, :email, :password_hash]

  schema("users") do
    field(:username, :string)
    field(:email, :string)
    field(:password_hash, :string)

    timestamps
  end

  def changeset(model, params, allowed_fields \\ @managed_fields) do
    model
    |> cast(params, allowed_fields)
    |> unique_constraint(:username, name: "unique_index_users_on_username")
    |> unique_constraint(:email, name: "unique_index_users_on_email")
  end
end
