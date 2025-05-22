#!/bin/sh

API_URL="https://user.monocle-dev.wld.ssdgws.co.uk/api/v0/client/authorise"

curl -X POST "$API_URL" \
  -H 'Content-Type: application/json' \
  -d '{
  "clientId": "client-001",
  "clientSecret": "auth-secret-for-client-001",
  "scopes": ["ORGANISATION", "PATIENT"]
}'
