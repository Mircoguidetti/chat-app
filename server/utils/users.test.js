const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users;
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'The Office Room'
    },
    {
      id: '2',
      name: 'Laura',
      room: 'The House Room'
    },
    {
      id: '3',
      name: 'David',
      room: 'The Office Room'
    }]
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'David',
      room: 'The Office Fans'
    }
    let resUsers = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a User', () => {
    let userId = '1';
    let userFound = users.removeUser(userId);

    expect(userFound.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a User', () => {
    let userId = '99';
    let userFound = users.removeUser(userId);

    expect(userFound).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a User', () => {
    let userId = '2';
    let userFound = users.getUser(userId);

    expect(userFound.id).toEqual(userId);

  });

  it('should not find a User', () => {
    let userId = '99';
    let userFound = users.getUser(userId);

    expect(userFound).toNotExist();
  });

  it('should return names for The Office Room', () => {
    let usersList = users.getUserList('The Office Room');

    expect(usersList).toEqual(['Mike', 'David']);
  });

  it('should return names for The House Room', () => {
    let usersList = users.getUserList('The House Room');

    expect(usersList).toEqual(['Laura']);
  });
});
