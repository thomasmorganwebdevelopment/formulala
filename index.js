module.exports = function Input(type, placeholder = null) {

  const input = `<input type=${type} placeholder=${placeholder}} />`;

  const parser = new DOMParser();

  return parser.parseFromString(input, "text/html");
};