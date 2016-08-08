defmodule Backend.Services.Support.Hashing do
  def hash_string(string) do
    Comeonin.Bcrypt.hashpwsalt(string)
  end

  def verify_string(string, hash) do
    Comeonin.Bcrypt.checkpw(string, hash)
  end
end
