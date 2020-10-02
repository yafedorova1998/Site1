function addition() {
var a = parseInt(document.getElementById('a').value);
var b = parseInt(document.getElementById('b').value);
var d = parseInt(document.getElementById('d').value);

if (isNaN(a)==true) a=0;
if (isNaN(b)==true) b=0;
if (isNaN(d)==true) b=0;

var c = a + b + d;

document.getElementById('result').innerHTML = a + " + " + b +" + " + d + " = " + c;
} 