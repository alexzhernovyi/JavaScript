 function fib (number) {
     let x = 1;
     let y = 1;
        for (let i = 2; i < number; i++) {
            let z = x + y;
            x = y;	
            y = z;
        }
        return y;
    }
console.log(fib(8));
