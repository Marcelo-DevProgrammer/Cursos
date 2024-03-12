const input = prompt('Enter an integer:', '5');
var total = 1;
let result = '';
for(let i=1; i<=input; i++) {
    
    for(let j=1; j<=total; j++) {
        result += '*';
    }
    total++;
    result += '\n';
}
console.log(result);