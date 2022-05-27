<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  Programação Assíncrona
</h2>

## O que é programação síncrona?

A linha de código só vai ser executada quando a anterior finalizar.

```PHP
<? PHP
  checkEmail();
  hashPassword();
  uploadPic();
  saveInfos();
  sendEmail();
?>
```

## O que é programação assíncrona?

Os comandos executam independente da ordem de escrita.  
As funções executam ao mesmo tempo sem bloquear o fluxo da aplicação,

```js
func1();
func2();
func3();
```

## Opções

- Callbacks
- Promise
- Async/Await

## Callbacks

```js
function sendEmail(user, body, callback) {
  setTimeout(() => {
    console.log(`
      Para: ${user}
      ----------------------------------------------------------------
      ${body}
    `);
    callback();
  }, 8000);
  console.log('Email Enviado, chegará em breve!');
}

sendEmail('Fábio', 'Hello Friend!', () => console.log('Fim!'));
```

> "Fim!" será exibido quando após o envio do email.

## Parâmetros em callbacks

```js
function sendEmail(user, body, callback) {
  setTimeout(() => {
    console.log(`
      Para: ${user}
      ----------------------------------------------------------------
      ${body}
    `);
    callback('Enviado', 3000);
  }, 3000);
  console.log('Email Enviado, chegará em breve!');
}

sendEmail('Fábio', 'Hello Friend!', (message, time) => console.log(message, time));
```

## Tratamento de ERROS em Callbacks

```js
function sendEmail(user, body, callback) {
  setTimeout(() => {
    // ...
    const error = true;

    error ? callback('Error ao enviar email') : callback();
  }, 3000);
  console.log('Email Enviado, chegará em breve!');
}

sendEmail('Fábio', 'Hello Friend!', error => console.log(error ? error : 'Sucesso!'));
```

> É aconselhável colocar o parâmetro de erro sempre por último.

---

## Promises

São uma evolução dos callbacks, uma forma mais sofisticada de se trabalhar com programação assíncrona.

Funciona como uma garantia, e garante um sucesso ou uma falha.

```js
function sendEmail(body, user) {
  return new Promise((resolve, reject) => {
    console.log('enviando');
    setTimeout(() => {
      const error = true;
      error ? reject() : resolve();
    }, 3000);
  });
}

sendEmail('Hello Friend', 'Fábio')
  .then(() => {
    console.log('finalizado');
  })
  .catch(() => {
    console.log('error');
  });
```

> É necessário tratar as promises com catch, caso aconteça dela ser rejeitada;

## Promises com parâmetros

Só é possível passar 1 parâmetro, tanto no Resolve quanto no Reject

```js
function sendEmail(body, user) {
  return new Promise((resolve, reject) => {
    console.log('enviando');
    setTimeout(() => {
      const error = true;
      error ? reject({ message: 'Error' }) : resolve({ time: 3000, to: 'Fulano' });
    }, 3000);
  });
}

sendEmail('Hello Friend', 'Fábio')
  .then(json => {
    console.log('finalizado', json);
  })
  .catch(error => {
    console.log(error);
  });
```

## Promises aninhadas ou Promise Hell

Quando existe mais lógicas, ter várias promises aninhadas a aplicação ficará uma bagunça e difícil de entender.

```js
function catchId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  });
}

function checkEmail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('email@gmail.com');
    }, 2000);
  });
}

function sendEmail(body, user) {
  return new Promise((resolve, reject) => {
    console.log('enviando');
    setTimeout(() => {
      const error = true;
      error ? reject({ message: 'Error' }) : resolve({ time: 3000, to: 'Fulano' });
    }, 3000);
  });
}

catchId().then(id => {
  checkEmail(id).then(email => {
    sendEmail('bla bla bla', email)
      .then(() => {
        console.log('Email enviado');
      })
      .catch(err => {
        console.log(err);
      });
  });
});
```

## Async/Await

Para evitar o Promise Hell é usado o async await.

```js
function catchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'Fábio', age: 22 },
        { name: 'José', age: 42 },
        { name: 'Teixeira', age: 32 }
      ]);
    }, [2000]);
  });
}

async function mainFunc() {
  const users = await catchUsers();
  const users2 = await catchUsers();
  const users3 = await catchUsers();
  console.log(users);
}

mainFunc();
```

## Tratamento de erros com Async e Await

```js
function catchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'Fábio', age: 22 },
        { name: 'José', age: 42 },
        { name: 'Teixeira', age: 32 }
      ]);
    }, [2000]);
  });
}

async function mainFunc() {
  try {
    const users = await catchUsers();
  } catch (err) {
    console.log(err);
  }
}
```
