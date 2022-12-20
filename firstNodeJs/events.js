const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Subscribe to celibrity for observer 1

celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("congratulations! You are the best!");
  }
});
// Observer 2
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Boo I could have better than that!");
  }
});

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

celebrity.emit("race", "win");
celebrity.emit("race", "lost");
