const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {
  games: [
    {
      id: 1,
      title: 'The Elder Scrolls V: Skyrim',
      year: 2011,
      price: 30
    },
    {
      id: 2,
      title: 'Minecraft',
      year: 2012,
      price: 40
    },
    {
      id: 3,
      title: 'Sea of Thieves',
      year: 2018,
      price: 25
    },
  ]
}

app.get('/games', (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
})

app.get('/games/:id', (req, res) => {
  const { id } = req.params;
  if(isNaN(id)) {
    res.sendStatus(400);
  } else {
    const game = DB.games.find(game => game.id === parseInt(id));
  
    if(game) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post('/games', (req, res) => {
  const { title, year, price } = req.body;
    
  if(!title || !year || !price) {
    res.sendStatus(400);
  } else {
    DB.games.push({id: 404, title, year, price});
    res.sendStatus(200);
  }
})

app.delete('/games/:id', (req, res) => {
  const { id } = req.params;
  const index = DB.games.findIndex(game => game.id === parseInt(id));

  if(index === -1) {
    res.sendStatus(404);
  } else {
    DB.games.splice(index, 1);
    res.sendStatus(200);
  }
})

app.put('/games/:id', (req, res) => {
  const { id } = req.params;
  const index = DB.games.findIndex(game => game.id === parseInt(id));

  if(index === -1) {
    res.sendStatus(404);
  } else {
    const { title, price, year } = req.body;

    if(title) { DB.games[index].title = title }
    if(price) { DB.games[index].price = price }
    if(year) { DB.games[index].year = year }

    res.sendStatus(200);
  }
})

app.listen(4000, () => {
  console.log('🚀')
})