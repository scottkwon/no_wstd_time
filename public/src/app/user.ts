export class User {
  constructor(
    public name: string = "",
    public email: string = "",
    public password: string = "",
    public birthday = null,
    public hosting = [],
    public attending = [],
    public pending = [],
    public journal = [],
    public tasks = [],
  ) {}
}
