function timer(ms) {
	return new Promise(function(resolve,reject) {
  	setTimeout(resolve("Я вывелась через " + ms/1000 + " секунды"))
  }, ms)
}

timer(3000).then(alert)