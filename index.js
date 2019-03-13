// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }


function registerSelf(){
   return fetch('http://guestbook.example.com/register', {
      method: "POST",
      body: {
         "firstName": "Kevin",
         "registryMessage": "Hi"
      }
   })
   .then(response => {
      return response.json();
   })
   .then(json => {
      return json.message
   })
}
function errorSelf(){
   return fetch('http://guestbook.example.com/register-error', {
      method: "POST",
      body: {
         "firstName": "Kevin",
         "registryMessage": "Hi"
      }
   })
   .then(response => {
      return response.json();
   })
   .then(json => {
      return json.message
   })
   .catch(error => {
      return ":("
   })
}
