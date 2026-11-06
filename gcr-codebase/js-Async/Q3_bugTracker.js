
function getBugs() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("API request failed!");
            } else {

                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            }

        }, 1000);
    });
}


getBugs()
    .then((bugs) => {

        console.log("Bug List:");

        
        console.table(bugs.map((bug, index) => ({
            "Bug Number": index + 1,
            "Bug Description": bug
        })));

    })
    .catch((error) => {
        console.log("Error:", error);
    });
