function countPrimeNumbers() {
    let primeCount = 0;

    for(let i = 2; i <= 100; i++) {
        let isPrime = true;

        for(let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            primeCount++;
        }
    }
    return primeCount;
}

const runIt = () => {
    const startTime = performance.now();

    for (let times = 1; times <= 100; times++) {
        countPrimeNumbers();
    }

    const endTime = performance.now();

    const timer = endTime - startTime;

    console.log("Execution time of calculating prime numbers 100 times was " + timer + " milliseconds.");
}

setTimeout(runIt, 0);