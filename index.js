const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  let formInfo = {
    name: 'sjn',
    registerMessage: 'Now registered'
  }

  let configObject = {
    method: 'POST',
    body: formInfo
  }

  return fetch('http://guestbook.example.com/register', configObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json.message;
  })
}

function errorSelf() {
  let formInfo = {
    name: 'sjn',
    registerMessage: 'Now registered'
  }

  let configObject = {
    method: 'POST',
    body: formInfo
  }

  return fetch('http://guestbook.example.com/register-error', configObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json.message;
  })
  .catch(function(error) {
    alert("Bad things... ");
    return ':(';
  })
}
