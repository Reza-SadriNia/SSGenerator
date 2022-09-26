const generator = require('generate-password');

function passwordgenerate() {
  const pass = generator.generate({
    length: 14,
    numbers: true,
    uppercase: true,
  })
  return pass
}

module.exports = passwordgenerate