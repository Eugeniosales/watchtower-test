let date = new Date();
console.log(
  `Atualizando labels - Setting up test in ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
);

let count = 0;
setInterval(() => {
  date = new Date();
  console.log(
    `TWO -> ${count++}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
  );
}, 10000);
