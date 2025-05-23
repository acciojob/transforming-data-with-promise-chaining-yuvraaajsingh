//your JS code here. If required.
document.getElementById("btn").onclick = function doPromise() {
    let input = parseInt(document.getElementById("ip").value);
    let output = document.getElementById("output");
    output.innerText = ""; // Clear output on new click

    // First Promise (2s): Return input value
    new Promise((resolve) => {
        setTimeout(() => {
            output.innerText += `Result: ${input}\n`;
            resolve(input);
        }, 2000);
    })
    // Second Promise (1s): Multiply by 2
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data * 2;
                output.innerText += `Result: ${result}\n`;
                resolve(result);
            }, 1000);
        });
    })
    // Third Promise (1s): Subtract 3
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data - 3;
                output.innerText += `Result: ${result}\n`;
                resolve(result);
            }, 1000);
        });
    })
    // Fourth Promise (1s): Divide by 2
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data / 2;
                output.innerText += `Result: ${result}\n`;
                resolve(result);
            }, 1000);
        });
    })
    // Fifth Promise (1s): Add 10
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let result = data + 10;
                output.innerText += `Final Result: ${result}\n`;
                resolve();
            }, 1000);
        });
    });
};