function registerSelf(configObj) {
  return fetch("http://guestbook.example.com/register", {
    method: "POST",
    body: {
      "name": "Name Here",
      "message": "Message here"
    }
  })
    .then(response => {
      // console.log(response)
      return response.json()
    })
    .then(json => {
      console.log(json.message)
      return json.message
    })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "Error": "Error",
      "Error": "Error"
    }
  }).then(response => {
    return response.json();
  }).then(json => {
    return json.message;
  }).catch(error => {
    console.log('Error:', error.message)
    return ":(";
  });
}