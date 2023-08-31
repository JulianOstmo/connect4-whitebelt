import ConnectFour from './ConnectFour';

describe('Game Creation Phase', () => {
  test('should print an empty grid', () => {
    const emptyGrid = [
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|'
    ].join('\n');

    const connectFour = new ConnectFour();
    expect(connectFour.log).toEqual(emptyGrid);
  });
});
