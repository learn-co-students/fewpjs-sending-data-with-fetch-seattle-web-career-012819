const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  const formData = {
    firstName: "Ezra",
    registryMessage: "Wtf mate?"
  }
  const config = {
    method: "POST",
    body: formData
  }
  const message = fetch('http://guestbook.example.com/register', config)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.message;
    })
    .catch(err => {
      return ":(";
    })
  return message;
}

function errorSelf() {
  const formData = {
    firstName: "Ezra",
    registryMessage: "Wtf mate?"
  }
  const config = {
    method: "POST",
    body: formData
  }
  const message = fetch('http://guestbook.example.com/register-error', config)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.message;
    })
    .catch(err => {
      return ":(";
    })
  return message;
}