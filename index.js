


function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    "method": "POST",
    "body": {
      "firstName": "Scott",
      "registryMessage": "What!"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Scott",
      "registryMessage": "Error practice!"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  }).catch(function(error){
    alert("Oh dear it looks like you done messed up :(");
    return (":(")
  })
}
