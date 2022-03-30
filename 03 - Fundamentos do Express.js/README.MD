<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  Fundamentos do Express.js
</h2>

## O que é Express.js?

É um **framework** para desenvolvimento web back-end com Node.js.

> yarn add express

---

## Rotas

Diversos caminhos que a aplicação possui, toda rota criada é necessária a devolução de uma resposta. Vale lembrar que só é possível enviar a resposta **uma única vez** afinal a conexão fecha logo após o envio.

> response.send(...);

```js
app.get('/', (request, response) => {
  response.send('<h1>Hello Friend</h1>');
});

app.get('/blog', (request, response) => {
  response.send('<h1>Blog</h1>');
});
```

> www.localhost.com:4000/blog

---

## Parâmetros

São formas de passar valores dinâmicos em uma rota.

```js
app.get('/hello/:name', (request, response) => {
  response.send(`<h1>Hello ${request.params.name}</h1>`);
});

// Outro exemplo

app.get('/hello/:name/:age?', (request, response) => {
  response.send(`<h1>Hello ${request.params.name}</h1>
  <h2>${request.params.age ? request.params.age : ''}</h2>`);
});
```

> Ultimo parâmetro nesse caso é opcional.  
> localhost.com:4000/blog/parâmetro1/parâmetro2

---

## Query Params

São parâmetros que não são fixos na rota.

```js
app.get('/blog', (request, response) => {
  const { artigo } = request.query;
  response.send(
    `<h1>Blog</h1>
    <h2>${artigo ? artigo : ''}</h2>`
  );
});
```

> São **completamente** opcionais.  
> localhost:4000/blog?artigo=teste
