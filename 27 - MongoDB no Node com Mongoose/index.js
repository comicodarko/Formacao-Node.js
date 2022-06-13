const mongoose = require('mongoose');

const Article = require('./models/article');

mongoose.connect('mongodb://localhost:27017/teste').then(() => {
  console.log('Run');
  const ArticleModel = mongoose.model('Article', Article);

  const newArticle = new ArticleModel({
    title: 'Teste',
    author: '123',
    body: "lorem ipsum dolor sit..."
  })

  // newArticle.save().then(() => {
  //   console.log('Artigo salvo!');
  // });

  ArticleModel.find().then(articles => {
    console.log(articles);
  });
  ArticleModel.findByIdAndUpdate('62a771106e13f4a5d445ea99',{
    title: 'Teste 2'
  }).then(() => {
    console.log('Atualizado');
  });
});


