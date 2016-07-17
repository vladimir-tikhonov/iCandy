defmodule Backend.Repo.Migrations.CreateUsersTable do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :citext, null: false
      add :email, :citext, null: false
      add :password_hash, :string, null: false

      timestamps
    end

    create unique_index(:users, [:username], name: "unique_index_users_on_username")
    create unique_index(:users, [:email], name: "unique_index_users_on_email")
  end
end
