let date = new Date();
console.log(
  `Depois - Setting up test in ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
);

let count = 0;
setInterval(() => {
  date = new Date();
  console.log(
    `Test after updte -> ${count++}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
  );
}, 10000);
