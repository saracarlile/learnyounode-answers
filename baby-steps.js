//console.log(process.argv);

var a = process.argv;
var sum = 0;
var i;
var temp;
for( i = 2; i < a.length; i ++){
    temp = Number.parseInt(a[i], 10);
    sum += temp;
}

console.log(sum);

