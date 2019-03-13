function registerSelf() {
	return fetch('http://guestbook.example.com/register', {
		method: 'POST',
		body: {
			firstName: 'billy',
			registryMessage: 'hellllllo'
		}
	})
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			return json.message;
			// return message;
			// if (response === 'OK') {
			// 	console.log('IT WORKED');
			// }
		})
		.catch(function(errorSelf) {
			return ':(';
		});
}

function errorSelf() {
	return fetch('http://guestbook.example.com/register-error', {
		method: 'POST',
		body: {
			firstName: 'billy',
			registryMessage: 'hellllllo'
		}
	})
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			return json.message;
			// return message;
			// if (response === 'OK') {
			// 	console.log('IT WORKED');
			// }
		})
		.catch(function() {
			return ':(';
		});
}
