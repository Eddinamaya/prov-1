function isDivisibleByThree(num) {
    return num % 3 === 0
}

function divisibleByThree(numbers) {
    return numbers.filter(isDivisibleByThree)
}

console.log(divisibleByThree([4, 7, 9, 3,8]))