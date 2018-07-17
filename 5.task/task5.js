 function fib (number) {
        var x = 1;
        var y = 1;
        for(i=2; i<=10; i++) {
            var z = x + y;
            x = y;	
            y = z;
        }
        return y;
    }
    console.log(fib(7));	