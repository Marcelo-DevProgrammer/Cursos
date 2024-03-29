const input = prompt('Enter an integer:', '5');

let result = '';
for(let i=1; i<=input; i++) {
    for(let j=1; j<=input; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
