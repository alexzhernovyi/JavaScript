
var arr = '';
for (var i = 0; i <= 7; i++) {
	arr += '#';
	console.log(arr);
}

function recurs(n, str) {
    console.log(str);
    if (n !== 0) {
       recurs(n - 1, str + '#');
    }
}
recurs(7, '#');

