module.exports = function Input(type, placeholder) {
    var input = document.createElement("input");
    input.type = type;
    placeholder ? input.placeholder = placeholder : "";

    return input;
  };