const moment = require('moment');
let generateMessage = (from, text, createdAt) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};

let generateLocationMessage = (from, latitude, longitude, createdAt) =>{
  return {
    from,
    url: `https://www.google.com/maps/?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
};
module.exports = {generateMessage, generateLocationMessage};
