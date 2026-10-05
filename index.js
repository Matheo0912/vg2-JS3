// oppgave1
// a)
const tall = [12, 5, 8, 130, 44, 8, 5, 130];
// tall.sort(function(a, b){return a - b})
// console.log(tall)

// b)
const reversed = tall.toReversed();
// console.log(reversed);

// c)
for (let i = 0; i < tall.length; i++) {
    // console.log(i,":", tall[i]);
}

// d)
var sum = 0;

for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
}

console.log(sum);
console.log(sum / (tall.length));

// oppgave2
// a)

console.log(Math.max(...tall));
console.log(Math.min(...tall));

// b)
const tall1 = [6,8,8,65,87]

var kvad = tall1.map(x => x * x)

console.log(kvad);


// c)
var nyArray = [2, 3, 6, 8, 8, 6, 6]
// %   
// 2%2 partall
// 3%2 oddetall
for (let i = 0; i < nyArray.length; i++) {
    var par = nyArray[i] % 2;
    if (par == 0) {
        // console.log("partall");
    } else {
        // console.log("oddetall");
    }
}
// console.log(7%2);

// d)
var nondup = [...new Set(nyArray)]

console.log(nondup);


