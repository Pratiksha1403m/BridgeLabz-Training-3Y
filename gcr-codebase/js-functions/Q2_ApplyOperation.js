
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}


function doubleNumber(number) {
    return number * 2;
}


function squareNumber(number) {
    return number * number;
}

let numbers = [1, 2, 3, 4];


let doubled = applyOperation(numbers, doubleNumber);
console.log("Doubled:", doubled);


let squared = applyOperation(numbers, squareNumber);
console.log("Squared:", squared);