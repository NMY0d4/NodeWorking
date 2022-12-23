function decrypted(data) {
  return `decrypted ${data}`;
}

function read() {
  return decrypted("data");
}

module.exports = { read };
