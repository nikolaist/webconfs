# testauth

This small project demonstrates how to call the authorisation API.

## API Endpoint

```
https://user.monocle-dev.wld.ssdgws.co.uk/api/v0/client/authorise
```

## Example Payload

```json
{
  "clientId": "client-001",
  "clientSecret": "auth-secret-for-client-001",
  "scopes": [
    "ORGANISATION",
    "PATIENT"
  ]
}
```

## Usage

Run the provided script to send the request using `curl`.

```
./call_api.sh
```

The script sends the JSON payload and prints the API response.
