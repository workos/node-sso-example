var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();
const WorkOS = require('@workos-inc/js').default;
const client = new WorkOS(process.env.WORKOS_API_KEY);
const domain = 'zach.workos.dev';
const redirectURI = 'https://zach.workos.dev/callback';
const projectID = 'project_01DG5TGK363GRVXP3ZS40WNGEZ';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET login page */
router.get('/login', (_req, res) => {
  const url = client.sso.getAuthorizationURL({
    domain,
    redirectURI,
    projectID,
  });
  res.redirect(url);
});

/* GET callback page */
router.get('/callback', async (req, res) => {
  const { code } = req.query;
  const profile = await client.sso.getProfile({
    code,
    projectID,
    redirectURI,
  });
  res.json(profile).send();
});

module.exports = router;
