const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () =>{
    let from = 'Dan';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});

describe('generateLocationMessage', () =>{
  it('should generate correct location object', () =>{
    let from = 'User';
    let latitude =  18;
    let longitude =  19;
    let url = 'https://www.google.com/maps/?q=18,19';

    let locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});

  });
});
