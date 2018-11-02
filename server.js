const express = require('express');
const next = require('next');
const path = require('path');
require('dotenv').config();

const { setup } = require('radiks-server');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT, 10) || 3000;

app.prepare().then(async () => {
  const server = express();

  const RadiksController = await setup();

  server.use('/radiks', RadiksController);

  server.use((req, res, _next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    _next();
  });

  server.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'manifest.json'));
  });

  server.get('/blogs/new', (req, res) => {
    const { params } = req;
    app.render(req, res, '/blogs/new', params);
  });

  server.get('/blogs/:id', (req, res) => {
    const { params } = req;
    app.render(req, res, '/blogs/show', params);
  });

  server.get('/blogs/:id/posts/new', (req, res) => {
    app.render(req, res, '/blogs/posts/new', req.params);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
