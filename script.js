function doPromise() {
  let input = document.getElementById("ip").value;
  let output = document.getElementById("output");
  output.innerText = "";
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      output.innerText += `Result: ${input}\n`;
      resolve(input);
    }, 2000);
  })
    .then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let ans = data * 2;
          output.innerText += `Result: ${ans}\n`;
          resolve(ans);
        }, 2000);
      });
    })
    .then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let ans = data - 3;
          output.innerText += `Result: ${ans}\n`;
          resolve(ans);
        }, 1000);
      });
    })
    .then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let ans = data / 2;
          output.innerText += `Result: ${ans}\n`;
          resolve(ans);
        }, 1000);
      });
    })
    .then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let ans = data + 10;
          output.innerText+=`Final Reault: ${ans}\n`;
          resolve(ans)
        }, 1000);
      });
    });
}
