# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :backend,
  ecto_repos: [Backend.Repo]

# Configures the endpoint
config :backend, Backend.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "EunmPVlnSwPCrckCXB+GPx+ghmdB1Z53hVO4i4Bjq819v6tiup0TaeEA72MQT0tL",
  render_errors: [view: Backend.ErrorView, accepts: ~w(json)]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

  config :backend, Backend.Services.Domain.User.Authentication,
    token_expiration_in_days: 60

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
