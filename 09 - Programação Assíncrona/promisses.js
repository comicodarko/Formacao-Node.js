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
