var n1 = Number(window.prompt("write one number: "));

for(let i = 1; i <= n1; i++){
    if (i % 2 == 0) {
        console.log(`${i} is pair`);
    } else {
        console.log(`${i} is odd`);
    }
}
