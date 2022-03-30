const express = require('express');
const app = express();

// Routes
app.get('/', (request, response) => {
  response.send('<h1>Hello Friend</h1>');
});

// Params
app.get('/hello/:name/:age?', (request, response) => {
  response.send(`<h1>Hello ${request.params.name}</h1>
  <h2>${request.params.age ? request.params.age : ''}</h2>`);
});

// Query Params
app.get('/blog', (request, response) => {
  const { artigo } = request.query;
  artigo
    ? response.send(`<h1>Blog</h1><h2>${artigo}</h2>`)
    : response.send('<h1>Blog</h1><h2>Sem artigo</h2>');
});

app.listen(4000, error => {
  error
    ? console.log(`Erro ao iniciar servidor: ${error}`)
    : console.log('Servidor iniciado com sucesso!');
});
