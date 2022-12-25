const axios = require("axios");

axios
    .get("https://www.wikipedia.org")
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message))
    .then(() => console.log("All done"));
