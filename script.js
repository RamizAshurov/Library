function timer(ms) {
	return new Promise(function(resolve,reject) {
  	setTimeout(resolve("� �������� ����� " + ms/1000 + " �������"))
  }, ms)
}

timer(3000).then(alert)