
function demo(a, a) {
    total = 10;

    console.log("Total:", total);

    const deleteResult = delete total;

    console.log("Delete result:", deleteResult);
    console.log("Global total:", globalThis.total);
}

demo(5, 10);

