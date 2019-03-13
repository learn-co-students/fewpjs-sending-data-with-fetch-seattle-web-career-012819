function registerSelf(){
  return fetch("http://guestbook.example.com/register",{
    "method": "POST",
    "body": {
      "firstName": "Joe",
      "registryMessage": "Donely!"
    }
  }).then(function(response){
    return response.json();
  }).then(function(json){
    return json.message;
  })
}

function errorSelf(){
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Pedru",
      "registryMessage": "Speak Spanish plz"
    }
  }).then(function(response){
    return response.json();
  }).then(function(json){
    return json.message;
  }).catch(function(error){
    console.log(error);
    return ':(';
  })
}
