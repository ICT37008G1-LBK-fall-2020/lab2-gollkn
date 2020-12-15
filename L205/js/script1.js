for (let i = 2; i < 20; i++) {
    if (numberIsPrime(i)) {
        console.log(i);
        alert(i);
    }
}


function numberIsPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
