let formData = {
  "firstName": "Nat",
  "registryMessage": "golb a htiw god"
};

let configObj = {
  method: "POST",
  body: formData
}

function registerSelf() {
  return fetch("http://guestbook.example.com/register", configObj)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json["message"])
    return json["message"];
  });
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", configObj)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json["message"])
    return json["message"];
  })
  .catch((error) => {
    return ":(";
  });
}

const testVar = {}

function testFunc() {
  return "hi"
}
