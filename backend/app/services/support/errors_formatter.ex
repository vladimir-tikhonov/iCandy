defmodule Backend.Services.Support.ErrorsFormatter do
  def format_changeset_errors(changeset_errors) do
    format_error = fn({field, {error_message, _}}, acc) ->
      Map.put(acc, field, error_message)
    end
    Enum.reduce(changeset_errors, %{}, format_error)
  end
end
