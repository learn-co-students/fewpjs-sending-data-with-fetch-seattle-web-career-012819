
function registerSelf() {
  let formData = {
    name: 'Cris',
    registryMessage: 'Registered!'
  }

  let configObject = {
    method: 'POST',
    body: formData
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
  let formData = {
    name: 'Cris',
    registryMessage: 'Registered!'
  }

  let configObject = {
    method: 'POST',
    body: formData
  }

  return fetch("http://guestbook.example.com/register-error", configObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json.message;
  })
  .catch(function(error) {
    alert("Something bad is happening!");
    return ':(';
  })
}