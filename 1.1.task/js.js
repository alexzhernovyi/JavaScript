
function USD() {
    var
    ua = ' ГРН.'
    number = document.getElementById('number').value;
    result = number * 26;
    result = number + ' ' + 'USD ' + '=' + ' '  + result + ua;
    document.getElementById("resultOne").innerHTML = result;
 
}

document.getElementById('convertationUSD').addEventListener('click', USD);

function UA() {
    var
    usd = ' USD.'
    number = document.getElementById('number1').value;
    result = number / 26;
    result = number + ' ' + 'ГРН. ' + '=' + ' '  + result + usd;
    document.getElementById("resultTwo").innerHTML = result;
 
}

document.getElementById('convertationUA').addEventListener('click', UA);

