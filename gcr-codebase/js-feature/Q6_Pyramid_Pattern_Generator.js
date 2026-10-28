
"use strict";

const inputLimit = Number(process.argv[2]);

const limit =
    Number.isInteger(inputLimit) && inputLimit > 0
        ? inputLimit
        : 5;

for (let row = 1; row <= limit; row++) {
    let line = "";

    for (let column = 1; column <= row; column++) {
        line += "*";

        if (column < row) {
            line += " ";
        }
    }

    console.log(line);
}

