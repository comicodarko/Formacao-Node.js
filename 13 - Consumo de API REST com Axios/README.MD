<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  Consumo de API REST com Axios
</h2>

Se tratando de consumo de API existem diversas formas, AJAX, AJAX com JQuery, Fetch API e **Axios**.

### CORS

Por padrão requisições feitas por outro endereços são bloqueadas, então quando estamos lidando com consumo de API é necessário controlar o CORS.

```console
npm install cors
```

```js
const cors = require('cors');
app.use(cors());
```

> Fará com que a API possa receber requisições de todo canto.
