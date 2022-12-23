const { send, read } = require("./internals");

// import { send } from "./internals/request.mjs";
// import { read } from "./internals/response.mjs";

function req(url, data) {
  send(url, data);
  return read();
}

console.log(req("https://google.com", "hello"));
