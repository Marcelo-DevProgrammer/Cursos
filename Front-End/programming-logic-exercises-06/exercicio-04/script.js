function isPrime(n) {
    let dividers = 0;
    for (let i=0; i<=n; i++) {
        if (n % i === 0) {
            dividers ++;
        }
    }
    if (dividers === 2) {
        return true;
    } else {
        return false;
    }
}

for(let i=1; i<=100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}