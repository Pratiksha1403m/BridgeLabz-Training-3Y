
function serverResponse(serverName, delay) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject(`${serverName} failed!`);
            } else {
                resolve(`${serverName} responded successfully`);
            }

        }, delay);
    });
}

Promise.all([
    serverResponse("Server A", 2000),
    serverResponse("Server B", 3000)
])
    .then((responses) => {
        console.log(responses);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });


Promise.race([
    serverResponse("Server A", 2000),
    serverResponse("Server B", 3000)
])
    .then((response) => {
        console.log("Fastest response:", response);
    })
    .catch((error) => {
        console.log("Race error:", error);
    });
