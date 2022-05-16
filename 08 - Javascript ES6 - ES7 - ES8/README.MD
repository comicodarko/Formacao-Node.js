<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  ES6, ES7, ES8
</h2>

## O que é ECMAScript?

É uma especificação de linguagem, ou seja, ela define os padrões para uma linguagem de programação, e o JavaScript é a implementação desses padrões.

---

## Constantes

Tem o mesmo propósito de uma variável, porém o valor não mudam.

```js
const name = 'Fábio José';
```

> Também é obrigatório passar um valor inicialmente.

---

## Let e Escopo

Funciona como uma variável porém trabalha com escopo de bloco também.

- **Global** - Todo mundo tem acesso.
- **Local** - Só a função onde foi declarado tem acesso.
- **Bloco** - Todo mundo tem acesso.

```js
var name = 'Fábio'; // Global

function f1() {
  var lastName = 'José'; // Local
  console.log(name + ' ' + lastName);
}

function f2() {
  console.log(name + ' ' + lastName); // ERRO
}
```

> f2 não reconhece lastName

```js
let name = 'Fábio'; // Global

function f1() {
  let lastName = 'José'; // Local
  console.log(name + ' ' + lastName);
  if (true) {
    let lastName = 'Novo'; // Bloco
  }
}
```

> Bloco = qualquer coisa entre { }  
> for, map, if, {}...  
> Com var é possível acessar a mesma de fora de um bloco.

---

## Parâmetros opcionais.

```js
// É possível definir valores default
function soma(a = 1, b = 2) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}
```

---

> Os valores padrões tem que vir SEMPRE no final.

## JSONs Encurtados

Possibilita criar JSONs sem definir o nome dos campos

```js
const name = 'Fábio';
const age = 21;
const bio = 'bla bla bla';

const user = { name, age, bio };
```

---

## Spread Operator

Possibilita a cópia de campos de um objeto para outro objeto.

```js
const name = 'Fábio';
const age = 21;
const bio = 'bla bla bla';

const work = {
  role: 'lorem',
  city: 'Caruaru',
  site: 'www.google.com'
};

const user = { name, age, bio, work, ...work };
```

---

## Desestruturação

```js
const work = {
  role: 'lorem',
  city: 'Caruaru',
  site: 'www.google.com'
};

const { role, city, site } = work;
```

---

## Arrow Function

Funções onde a sintaxe se parece uma flecha, apenas mais simplificadas.

```js
const array = [1, 2, 3, 4];

array.map(item => {
  console.log(item);
});

const fun = (a, b) => {
  //...
};

fun(1, 2);
```

> Arrow Functions só funcionam em callbacks e quando guardamos a mesma em uma variável.

---

## Find

```js
const work = [
  { id: 1, label: 'item 1' },
  { id: 2, label: 'item 2' }
  { id: 3, label: 'item 3' }
];

const find = work.find(element => el.id === 1);
```

> Um jeito melhor de encontrar 1 item em um array, caso não encontre, retorna **undefined**.

---

## Template Literal

```js
const name = 'Fábio';
console.log(`${name} José`);
```

> Um jeito mais simples de concatenar strings.  
> Quebrar linhas vai fazer parte de sua string final.

---
