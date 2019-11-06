# node-sso-example

An example application demonstrating how SSO works with WorkOS and Node.

## Clone and Install

Clone this repo and install dependencies:

```sh
git clone https://github.com/workos-inc/node-sso-example.git && cd node-sso-example && npm install
```

## Configure your environment

1. Grab your [API Key](https://dashboard.workos.com/api-keys).
2. Create an [SSO Connection](https://dashboard.workos.com/sso/connections).
3. Configure a [Redirect URI](https://dashboard.workos.com/sso/configuration).
4. Get your [Project ID](https://dashboard.workos.com/sso/configuration).
5. Update `routes/index.js`:

```typescript
const client = new WorkOS("$YOUR_API_KEY");
const domain = "$YOUR_DOMAIN";
const redirectURI = "$YOUR_REDIRECT_URI";
const projectID = "$YOUR_PROJECT_ID";
```

## Run the server and log in using SSO

```sh
npm start
```

Head to `$YOUR_DOMAIN/login` to authenticate!

For more information, see the [WorkOS Node SDK documentation](https://dashboard.workos.com/docs/sdk/node).

_(\*) When running in a local environnent, you'll need to provide a redirect URI that points to your machine. You can use [ngrok](https://ngrok.com) to set up a tunnel and do this._
