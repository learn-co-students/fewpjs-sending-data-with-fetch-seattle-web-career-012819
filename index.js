// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

const url = 'http://guestbook.example.com/register';
const url2 = 'http://guestbook.example.com/register-error';

function registerSelf() {
  return fetch(url, {
    'method': 'POST',
    'body': {
      "firstName": "Ben",
      "registryMessage": "Congrats"
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
  return json.message;
  });
}

function errorSelf() {
  return fetch(url2, {
    'method': 'POST',
    'body': {
      "firstName": "Ben",
      "registryMessage": "Congrats"
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
  return json.message
  })
  .catch(function(error) {
    return ":("
  })
}
