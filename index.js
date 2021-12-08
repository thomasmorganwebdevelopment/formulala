var DOMParser = require('xmldom').DOMParser;

module.exports = function Input({type, placeholder = null}) {

  const input = `<input type=${type} placeholder=${placeholder} />`;

  return new DOMParser().parseFromString(input, "text/xml");
};