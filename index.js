const testVar = {}

function testFunc() {
  return "hi"
}

const registerSelf = () => {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: {
      firstName: 'David',
      registryMessage: 'I do not know'
    }
  })
  .then(res => res.json())
  .then(json => json.message)
  .catch(err => ":(");
}

const errorSelf = () => {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    body: {
      firstName: 'David',
      registryMessage: 'I do not know'
    }
  })
  .then(res => res.json())
  .then(json => json.message)
  .catch(err => ":(");
}
