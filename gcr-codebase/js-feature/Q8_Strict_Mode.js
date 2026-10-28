
"use strict";

// Correct ES6 version:
function demo(first, second) {
    let total = 10;

    console.log("First:", first);
    console.log("Second:", second);
    console.log("Total:", total);

    const record = { total };
    delete record.total;

    console.log("After deleting property:", record);
}

demo(5, 10);

