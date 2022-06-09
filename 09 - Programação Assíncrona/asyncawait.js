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

async function mainFunc() {
  const id = await catchId();
  const email = await checkEmail(id);
  sendEmail(email)
    .then(() => {
      console.log('enviado');
    })
    .catch(err => {
      console.log('falha');
    });
}
