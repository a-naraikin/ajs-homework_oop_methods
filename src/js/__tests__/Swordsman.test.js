import Swordsman from '../Swordsman';

test('should return the created Swordsman', () => {
  expect(new Swordsman('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  });
});
