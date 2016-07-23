defmodule Backend.Services.Support.Hashing do
  def hash_string(string) do
    Comeonin.Bcrypt.hashpwsalt(string)
  end
end
