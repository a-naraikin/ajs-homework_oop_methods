import Zombie from '../Zombie';

test('should return the created Zombie', () => {
  expect(new Zombie('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  });
});
