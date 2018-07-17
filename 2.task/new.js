function num (n){
	if (n > 0){
		console.log(n);
		return num (n - 1);
	}
	else {
		return 'THE END, bye';
	}
}
console.log(num(10))