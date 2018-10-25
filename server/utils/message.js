let generateMessage = (from, text, createdAt) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

let generateLocationMessage = (from, latitude, longitude, createdAt) =>{
  return {
    from,
    url: `https://www.google.com/maps/?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};
module.exports = {generateMessage, generateLocationMessage};
