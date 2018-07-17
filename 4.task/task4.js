function recurs(n, str) {
    console.log(str);
    if (n !== 0) {
       recurs(n - 1, str + '#');
    }
}
recurs(7, '#');