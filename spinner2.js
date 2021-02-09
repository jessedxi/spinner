/*process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r\|  '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r\/  '); 
}, 1100);

setTimeout(() => {
  process.stdout.write('\r\-  '); 
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r\|   '); 
}, 1700); */

const spinBoard = ["|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
const spinner2 = (message, delay) => {
  let times = 1;
  for (const char of message) {
    setTimeout(() => {
      process.stdout.write(char);
    }, times * delay);
    times++;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, (times * delay));
};

spinner2(spinBoard, 200);
