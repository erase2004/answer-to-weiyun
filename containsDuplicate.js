function containsDuplicate(nums) {
    const set = new Set([]);
    
    for (let n of nums) {
        if (set.has(n))
            return true;
        else
            set.add(n);
    }
    
    return false;
};

// test

let result, n, ans;
n = [];
ans = 'boolean';
console.log('containsDuplicate(%s) should return %s:', n, ans);
result = (typeof containsDuplicate(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = [1];
ans = false;
console.log('containsDuplicate(%s) should return %s:', n, ans);
result = (containsDuplicate(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = [1,1];
ans = true;
console.log('containsDuplicate(%s) should return %s:', n, ans);
result = (containsDuplicate(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = [1,2];
ans = false;
console.log('containsDuplicate(%s) should return %s:', n, ans);
result = (containsDuplicate(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = [1,2,3];
ans = false;
console.log('containsDuplicate(%s) should return %s:', n, ans);
result = (containsDuplicate(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);

n = [2,4,6, 1, 74, 36, 6];
ans = true;
console.log('containsDuplicate(%s) should return %s:', n, ans);
result = (containsDuplicate(n) === ans);
console.log('%c %s', `color : ${result? 'green' : 'red'}`, `${result? 'pass' : 'failed'}`);