let generateMessage = (from, text, createdAt) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage}
