function countPrimes(n) {
    if (n < 3) return 0;
    if (n === Infinity) return Infinity;
    
    const primes = [2];
    
    for (let num = 3; num < n; num += 2) {
        const bound = Math.floor(Math.pow(num, 0.5));
        
        let isPrime = true;
        for (let pn of primes) {
            if (pn > bound) {
                break;
            }
            if (num % pn === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) primes.push(num);
    }
    
    return primes.length;
};

// test

let result, n, ans;
n = Math.random() * 1000;
ans = 'number';
console.log('countPrimes(%d) should return %s:', n, ans);
result = (typeof countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = 1;
ans = 0;
console.log('countPrimes(%d) should return %s:', n, ans);
result = (countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = 2;
ans = 0;
console.log('countPrimes(%d) should return %s:', n, ans);
result = (countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = 3;
ans = 1;
console.log('countPrimes(%d) should return %s:', n, ans);
result = (countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = 3.1;
ans = 2;
console.log('countPrimes(%d) should return %s:', n, ans);
result = (countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = 9;
ans = 4;
console.log('countPrimes(%d) should return %s:', n, ans);
result = (countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = Infinity;
ans = Infinity;
console.log('countPrimes(%d) should return %s:', n, ans);
result = (countPrimes(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);
