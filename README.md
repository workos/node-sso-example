# node-sso-example

An example application demonstrating how SSO works with WorkOS and Node.

## Clone and Install

Clone this repo and install dependencies:

```sh
git clone https://github.com/workos-inc/node-sso-example.git && cd node-sso-example && npm install
```

## Configure your environment

1. Grab your API Key and Client ID from the WorkOS Dashboard. Create a `.env`
file at the root of the project, and store these like so:
```
WORKOS_API_KEY=sk_xxxxxxxxxxxxx
WORKOS_CLIENT_ID=project_xxxxxxxxxxxx
```
2. Create an SSO Connection in the WorkOS Dashboard.
3. Add `http://localhost:3000/callback` as a Redirect URI in the Configuration section of the Dashboard.
4. Update `routes/index.js` with the Connection domain (or Connection ID).

## Run the server and log in using SSO

```sh
npm start
```

Head to `http://localhost:3000/login` to authenticate!

For more information, see the [WorkOS Node SDK documentation](https://docs.workos.com/sdk/node).
