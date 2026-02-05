let array = [];

for(let i=1; i<=1000; i++) {
    let stringNum = i.toString().at(-1);
    if(stringNum === '1') {
        array.push(i);
    }
}

console.log(array)