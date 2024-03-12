const input = prompt('Enter five ages separated by commas: ', '10,5,23,18,31');
const values = input.split(',');
console.log('Ages', values);

let total = 0;
for(let i=0; i<values.length; i++) {
    total += parseInt(values[i]);
}

const average= total / values.length;
console.log('Média', average);