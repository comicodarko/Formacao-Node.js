function sendEmail(user, body, callback) {
  setTimeout(() => {
    // ...
    const error = true;

    error ? callback('Error ao enviar email') : callback();
  }, 3000);
  console.log('Email Enviado, chegará em breve!');
}

sendEmail('Fábio', 'Hello Friend!', error => console.log(error ? error : 'Sucesso!'));
