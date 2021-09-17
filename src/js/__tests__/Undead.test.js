import Undead from '../Undead';

test('should return the created Undead', () => {
  expect(new Undead('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    defence: 25,
  });
});
