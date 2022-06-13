<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  MongoDB no Node com Mongoose
</h2>

## Como o MongoDB funciona

- Banco de dados não relacional.
- Não é preciso seguir estrutura definida de tabela.
- Cada dado é um documento e todos são completamente independente.

### **Iniciando**

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teste').then(() => {
  console.log('Run');
});
```

### **Criando Model**
```js
const mongoose = require('mongoose');

const Article = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  date: {type: Date, default: Date.now},
  special: Boolean,
  resume: {
    content: String,
    author: String
  }
});

module.exports = Article;
```

### **Salvando dados**

```js
const ArticleModel = mongoose.model('Article', Article);

const newArticle = new ArticleModel({
  title: 'Teste',
  author: 'Fulano',
  body: "lorem ipsum dolor sit..."
})

newArticle.save();
```

### **Buscando dados**

```js
const ArticleModel = mongoose.model('Article', Article);

ArticleModel.find().then(articles => {
  console.log(articles);
});

ArticleModel.find({'author': '123'}).then(articles => {
  console.log(articles);
});

ArticleModel.find({'resume.content': 'teste'}).then(articles => {
  console.log(articles);
});

ArticleModel.findOne({'author': '123'}).then(articles => {
  console.log(articles);
});
```
> Retorna null caso não exista.

### **Deletando dados**

```js
ArticleModel.findByIdAndDelete('62a77074c8a8062b4c6c797f').then(() => {
  console.log('Deletado!');
});
```

### **Atualizando um dado**

```js
ArticleModel.findByIdAndUpdate('62a77074c8a8062b4c6c797f',{
  title: 'Teste 2'
}).then(() => {
  console.log('Atualizado');
});
```