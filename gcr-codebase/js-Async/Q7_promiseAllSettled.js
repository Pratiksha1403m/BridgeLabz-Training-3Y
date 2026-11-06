
function loadProfile() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.3) {
                reject("Profile loading failed");
            } else {
                resolve("Profile Loaded");
            }

        }, 2000);
    });
}


function loadPosts() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.3) {
                reject("Posts loading failed");
            } else {
                resolve("Posts Loaded");
            }

        }, 1500);
    });
}


function loadMessages() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.3) {
                reject("Messages loading failed");
            } else {
                resolve("Messages Loaded");
            }

        }, 1000);
    });
}


async function loadDashboard() {

    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const endTime = Date.now();

  
    results.forEach((result, index) => {

        const modules = [
            "Profile",
            "Posts",
            "Messages"
        ];

        if (result.status === "fulfilled") {

            console.log(
                modules[index] + ": Success - " + result.value
            );

        } else {

            console.log(
                modules[index] + ": Failed - " + result.reason
            );

        }
    });

    console.log(
        "Total time taken:",
        (endTime - startTime) / 1000,
        "seconds"
    );
}


loadDashboard();
