

function coffeeStep(stepName) {
    return new Promise((resolve, reject) => {

       
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

   
            if (Math.random() < 0.2) {
                reject(`${stepName} failed!`);
            } else {
                console.log(stepName);
                resolve();
            }

        }, delay);
    });
}


coffeeStep("1. Water is boiling")
    .then(() => {
        return coffeeStep("2. Coffee is brewing");
    })
    .then(() => {
        return coffeeStep("3. Pouring coffee into cup");
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation error:", error);
    });
