let formData = {
  "firstName": "Eli",
  "registryMessage": "Howdy doody"
}

let configObject = {
  method: "POST", 
  body: formData 
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', configObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json.message;
  })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', configObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    return json.message;
  })
  .catch(function(error) {
    return ":("
  });
}