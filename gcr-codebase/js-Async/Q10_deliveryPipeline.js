
function deliveryStep(stepName) {

    return new Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            if (Math.random() < 0.2) {

                reject(`${stepName} failed`);

            } else {

                resolve();

            }

        }, delay);
    });
}


async function runPipeline() {

    try {

        console.log("Start Pipeline");

       
        await deliveryStep("Take Order");
        console.log("Step 1: Order taken");

        
        await deliveryStep("Prepare Food");
        console.log("Step 2: Food prepared");

     
        await deliveryStep("Pack Food");
        console.log("Step 3: Package ready");

        
        await deliveryStep("Dispatch Order");
        console.log("Step 4: Out for delivery");

     
        await deliveryStep("Deliver Order");
        console.log("Delivery completed!");

    } catch (error) {

        // Handle any failed step
        console.log("Pipeline failed!");

        console.log("Error:", error);

    }
}


runPipeline();

