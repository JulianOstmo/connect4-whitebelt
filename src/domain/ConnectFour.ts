export default class ConnectFour {
  private _log: string[] = [];

  public get log(): string {
    return this._log.join('\n');
  }

  constructor() {
    const grid = [
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|',
      '|_|_|_|_|_|_|_|'
    ].join('\n');
    this._log.push(grid);
  }
}
