module.exports = function Input(type, placeholder = null) {

  let input = `<input type=${type} placeholder=${placeholder}} />`;

  let DOMParser = new DOMParser();

  return DOMParser.parseFromString(input, "text/html");
};