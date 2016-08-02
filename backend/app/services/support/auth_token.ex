defmodule Backend.Services.Support.AuthToken do
  import Joken

  def generate_auth_token(user_id, expiration, secret) do
    %{user_id: user_id, exp: expiration, jti: UUID.uuid4()}
    |> token
    |> with_signer(hs512(secret))
    |> sign
    |> get_compact
  end
end
