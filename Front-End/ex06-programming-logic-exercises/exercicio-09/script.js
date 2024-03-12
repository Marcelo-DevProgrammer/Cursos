
const ages = prompt('Enter ten ages separated by commas: ', '10,5,23,18,31');
const values = ages.split(',');
console.log('Ages', values);


var total = 0;
for(let i=0; i<values.length; i++) {
    if (values[i] >= 18){
        total++;
        console.log(`this is the ${total}nd person over 18, she is ${values[i]}`)
    }
}
