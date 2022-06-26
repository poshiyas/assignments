const printDate = function () {
  const date = new Date();
  console.log('current date = ' + date);
};

const printMonth = function () {
  const date = new Date();
  const month = date.getMonth();
  console.log('current Month is  ' + (month+1));
};

//const info = function(){

//}

module.exports.date = printDate;
module.exports.month = printMonth;
//module.exports.info = info;
