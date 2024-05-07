const sentence = "hello there from lighthouse labs";
let interval = 0;
for (const char of sentence) {
  interval += 70;
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, interval) // <= delay to make it noticeable. Can dial it down later.
}

//Adding a new line character after sentence is displayed
setTimeout(() => {
  console.log("\n")
}, interval + 70);
