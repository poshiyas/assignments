const trim = function () {
  let str = '    Sudip    ';
  let trim = str.trim();
  console.log(trim);
};

const upperCase = function () {
  let str = 'Sudip';
  let upperCase = str.toUpperCase();
  console.log(upperCase);
};
const lowerCase = function () {
  let str = 'Sudip';
  let lowerCase = str.toLowerCase();
  console.log(lowerCase);
};

module.exports.trim = trim;
module.exports.upperCase = upperCase;
module.exports.lowerCase = lowerCase;
