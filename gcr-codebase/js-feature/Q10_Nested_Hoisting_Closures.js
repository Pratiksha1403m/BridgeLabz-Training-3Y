
"use strict";

function outer() {
    console.log("Outer before assignment:", count);

    var count = 5;

    function inner() {
        console.log("Inner before assignment:", count);

        var count = 10;

        console.log("Inner after assignment:", count);
    }

    inner();

    console.log("Outer after inner:", count);
}

outer();


function outerWithArrow() {
    console.log("Arrow outer before assignment:", count);

    var count = 5;

    const innerArrow = () => {
        console.log("Arrow inner reads outer count:", count);

        const innerCount = 10;
        console.log("Arrow innerCount:", innerCount);
    };

    innerArrow();
}

outerWithArrow();

