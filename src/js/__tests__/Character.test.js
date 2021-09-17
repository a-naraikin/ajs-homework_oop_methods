import Character from '../Character';

test.each([0, 1, -1])(
  'should return an error on a number instead of a name',
  (num) => {
    const textErr = 'Имя должно быть строкой';
    expect(() => new Character(num)).toThrowError(new Error(textErr));
  },
);

test.each(['', 'A', 'aaaaaaaaaaa'])(
  'should return an error for a name less than 2 or more than 10 characters',
  (str) => {
    const textErr = 'Имя должно содержать от 2 до 10 символов';
    expect(() => new Character(str)).toThrowError(new Error(textErr));
  },
);

test('should return the name', () => {
  const character = new Character('John');
  expect(character.name).toBe('John');
});
