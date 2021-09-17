export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
